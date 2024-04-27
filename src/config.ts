import social from "../src/assets/social.png";

interface IConfig {
  me: {
    name: string;
    job: string;
    started: string;
    stack: string;
    hobby: string;
    projectLink: string;
  };
  socials: {
    [name: string]: string;
  };
  projects: {
    [name: string]: {
      url: string;
      tags: string[];
    };
  };
  og: {
    image: string;
  };
}

export const Config: IConfig = {
  me: {
    name: "Coding Bunker",
    job: "backend engineer",
    started: "1970-01-01",
    stack: "Scratch",
    hobby: "gamble my life savings",
    projectLink: "https://github.com/JohnDoe?tab=repositories",
  },
  socials: {
    partnership: "https://forms.gle/FPca5upst1VTGFP86",
    cfp: "https://forms.gle/okz6VZ9Uv8JcGTiS8",
    github: "https://github.com/Coding-Bunker",
    discord: "https://discord.com/invite/9x4FqmTxDu",
  },
  projects: {
    "996.ICU": {
      url: "https://github.com/996icu/996.ICU",
      tags: ["ccp", "chinese", "overwork", "labor", "996"],
    },
    Linux: {
      url: "https://github.com/torvalds/linux",
      tags: ["c", "kernel", "unix", "os"],
    },
  },
  og: {
    image: social.src,
  },
};
