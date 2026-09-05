import {
  ACESFilmicToneMapping,
  DirectionalLight,
  Group,
  HemisphereLight,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  OrthographicCamera,
  Scene,
  SphereGeometry,
  TorusGeometry,
  WebGLRenderer,
} from "three";

export function createAvatar(canvas: HTMLCanvasElement, onLost: () => void) {
  const renderer = new WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(144, 144, false);
  renderer.toneMapping = ACESFilmicToneMapping;
  const scene = new Scene();
  const camera = new OrthographicCamera(-2, 2, 2, -2, 0.1, 30);
  camera.position.set(0, 0.7, 8);
  camera.lookAt(0, 0, 0);
  scene.add(new HemisphereLight(0xffffff, 0x878e78, 2.4));
  const key = new DirectionalLight(0xfff4e3, 3.5);
  key.position.set(-3, 5, 5);
  scene.add(key);
  const rim = new DirectionalLight(0xffffff, 2.5);
  rim.position.set(4, 2, -2);
  scene.add(rim);

  const clay = new MeshStandardMaterial({ color: 0xe7e9db, roughness: 0.37 });
  const sage = new MeshStandardMaterial({ color: 0x819575, roughness: 0.55 });
  const dark = new MeshStandardMaterial({ color: 0x263731, roughness: 0.28 });
  const glow = new MeshBasicMaterial({ color: 0xf6ffd6 });
  const coral = new MeshStandardMaterial({ color: 0xe2946d, roughness: 0.4 });
  const sphere = new SphereGeometry(1, 32, 24);
  const robot = new Group();
  scene.add(robot);
  const blob = (
    parent: Group,
    material: MeshStandardMaterial | MeshBasicMaterial,
    position: [number, number, number],
    scale: [number, number, number],
  ) => {
    const mesh = new Mesh(sphere, material);
    mesh.position.set(...position);
    mesh.scale.set(...scale);
    parent.add(mesh);
    return mesh;
  };
  blob(robot, sage, [0, -0.8, 0], [0.67, 0.65, 0.47]);
  blob(robot, clay, [-0.32, -1.34, 0.12], [0.25, 0.16, 0.34]);
  blob(robot, clay, [0.32, -1.34, 0.12], [0.25, 0.16, 0.34]);
  blob(robot, coral, [0, -0.65, 0.46], [0.09, 0.09, 0.04]);
  const head = new Group();
  head.position.y = 0.25;
  robot.add(head);
  blob(head, clay, [0, 0, 0], [0.98, 0.84, 0.65]);
  blob(head, dark, [0, -0.02, 0.49], [0.76, 0.49, 0.24]);
  blob(head, sage, [-0.98, 0, 0], [0.16, 0.23, 0.23]);
  blob(head, sage, [0.98, 0, 0], [0.16, 0.23, 0.23]);
  const eyes = [-0.28, 0.28].map((x) =>
    blob(head, glow, [x, 0.05, 0.721], [0.095, 0.145, 0.035]),
  );
  const smileGeometry = new TorusGeometry(0.14, 0.022, 8, 24, Math.PI);
  const smile = new Mesh(smileGeometry, glow);
  smile.rotation.z = Math.PI;
  smile.position.set(0, -0.18, 0.737);
  head.add(smile);
  blob(head, sage, [0, 0.94, 0], [0.045, 0.2, 0.045]);
  const antenna = blob(head, coral, [0, 1.13, 0], [0.11, 0.11, 0.11]);
  const arms = [-1, 1].map((side) => {
    const arm = new Group();
    arm.position.set(side * 0.65, -0.55, 0);
    robot.add(arm);
    blob(arm, sage, [side * 0.15, -0.22, 0], [0.2, 0.4, 0.2]);
    blob(arm, clay, [side * 0.22, -0.52, 0.03], [0.2, 0.2, 0.2]);
    return arm;
  });

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  let inView = true;
  let lost = false;
  let last = 0;
  let time = 0;
  let waveStart = -10;
  const pointer = { x: 0, y: 0 };
  const pose = () => {
    const still = reduce.matches;
    const waveTime = time - waveStart;
    const wave =
      !still && waveTime < 2.4
        ? Math.sin((Math.min(waveTime / 0.3, 1) * Math.PI) / 2) *
          Math.min((2.4 - waveTime) / 0.4, 1)
        : 0;
    robot.position.y = still ? 0 : Math.sin(time * 1.8) * 0.065;
    robot.rotation.y = still ? -0.12 : Math.sin(time * 0.65) * 0.1;
    head.rotation.y +=
      ((still ? 0 : pointer.x * 0.45) - head.rotation.y) * 0.08;
    head.rotation.x += ((still ? 0 : pointer.y * 0.2) - head.rotation.x) * 0.08;
    head.rotation.z = still ? -0.06 : Math.sin(time * 1.3) * 0.04 - wave * 0.12;
    const blink = time % 4.6;
    const eyeHeight =
      !still && blink > 4.35
        ? Math.max(0.08, Math.abs((blink - 4.475) / 0.125))
        : 1;
    eyes.forEach((eye) => {
      eye.scale.y = 0.145 * eyeHeight;
    });
    arms[0].rotation.z = still ? -0.15 : Math.sin(time * 1.8) * 0.09 - 0.15;
    arms[1].rotation.z = 0.15 + wave * (2.1 + Math.sin(waveTime * 16) * 0.3);
    antenna.scale.setScalar(0.11 + (still ? 0 : Math.sin(time * 2.5) * 0.012));
    renderer.render(scene, camera);
  };
  const tick = (now: number) => {
    // Cap this tiny decorative scene to 30fps, independent of display refresh rate.
    if (now - last < 1000 / 30) return;
    time += Math.min((now - last) / 1000, 0.05);
    last = now;
    pose();
  };
  const sync = () => {
    renderer.setAnimationLoop(null);
    if (lost) return;
    pose();
    if (!reduce.matches && inView && !document.hidden) {
      last = performance.now();
      renderer.setAnimationLoop(tick);
    }
  };
  const move = (event: PointerEvent) => {
    if (reduce.matches || !inView || event.pointerType !== "mouse")
      return;
    const rect = canvas.getBoundingClientRect();
    pointer.x = Math.max(
      -1,
      Math.min(1, (event.clientX - rect.left - rect.width / 2) / 300),
    );
    pointer.y = Math.max(
      -1,
      Math.min(1, (event.clientY - rect.top - rect.height / 2) / 300),
    );
  };
  const leave = () => {
    pointer.x = 0;
    pointer.y = 0;
  };
  const contextLost = (event: Event) => {
    event.preventDefault();
    lost = true;
    renderer.setAnimationLoop(null);
    onLost();
  };
  const observer = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    sync();
  });
  observer.observe(canvas);
  window.addEventListener("pointermove", move, { passive: true });
  document.documentElement.addEventListener("pointerleave", leave);
  document.addEventListener("visibilitychange", sync);
  reduce.addEventListener("change", sync);
  canvas.addEventListener("webglcontextlost", contextLost);
  sync();
  return {
    wave() {
      waveStart = time;
    },
    dispose() {
      renderer.setAnimationLoop(null);
      observer.disconnect();
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", sync);
      reduce.removeEventListener("change", sync);
      canvas.removeEventListener("webglcontextlost", contextLost);
      sphere.dispose();
      smileGeometry.dispose();
      [clay, sage, dark, glow, coral].forEach((material) => material.dispose());
      renderer.dispose();
      renderer.forceContextLoss();
    },
  };
}
