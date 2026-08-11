export interface InfluentialPeer {
  name: string;
  initials: string;
  role: string;
  description: string;
  image?: string;
}

export const influentialPeersPage = {
  title: "influential peers",
  intro:
    "a quiet list of people who make the standard feel higher: how they think, what they repeat, and what i copy from being around them.",
};

export const influentialPeers: InfluentialPeer[] = [
  {
    name: "maya rahman",
    initials: "mr",
    role: "product-minded engineer · mock entry",
    description:
      "maya turns vague ambition into operating standards. she asks why something matters before asking how to build it, ships small versions quickly, and keeps the conversation grounded in taste, usefulness, and pace.",
  },
];
