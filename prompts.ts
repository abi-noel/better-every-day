enum PromptCategory {
  INTENTION = "Intention",
  HEALING = "Healing",
  GRATITUDE = "Gratitude",
  PRESENCE = "Presence",
  PURPOSE = "Purpose",
  GROWTH = "Growth",
}
export interface Prompt {
  pageNumber: number;
  category: PromptCategory;
  question: string;
}
export const prompts: Prompt[] = [
  {
    pageNumber: 3,
    category: PromptCategory.INTENTION,
    question: `Who are you no longer willing to be?`,
  },
  {
    pageNumber: 4,
    category: PromptCategory.INTENTION,
    question: `What would you call this chapter of your life right now?`,
  },
  {
    pageNumber: 5,
    category: PromptCategory.INTENTION,
    question: `What matters most to you? Are you living in alignment with that?`,
  },
  {
    pageNumber: 6,
    category: PromptCategory.INTENTION,
    question: `In what areas of life would you like to e more intentional?`, // fix typo
  },
  {
    pageNumber: 7,
    category: PromptCategory.INTENTION,
    question: `What do you want to start doing less of?`,
  },
  {
    pageNumber: 8,
    category: PromptCategory.INTENTION,
    question: `What do you want to start doing more of?`,
  },
  {
    pageNumber: 9,
    category: PromptCategory.INTENTION,
    question: `How do you want to be remembered?`,
  },
  {
    pageNumber: 10,
    category: PromptCategory.INTENTION,
    question: `What are you committed to this year?`,
  },
  {
    pageNumber: 11,
    category: PromptCategory.INTENTION,
    question: `What boundaries do you need to set to better focus on your goals?`,
  },
  {
    pageNumber: 12,
    category: PromptCategory.INTENTION,
    question: `How do you want to feel this week?`,
  },
  {
    pageNumber: 13,
    category: PromptCategory.INTENTION,
    question: `What is something you want to happen this year?`,
  },
  {
    pageNumber: 14,
    category: PromptCategory.INTENTION,
    question: `What advice do you give to others that you don't follow yourself?`,
  },
  {
    pageNumber: 15,
    category: PromptCategory.INTENTION,
    question: `What practices support your creativity?`,
  },
  {
    pageNumber: 16,
    category: PromptCategory.INTENTION,
    question: `List 3 skills you would like to develop.`,
  },
  {
    pageNumber: 17,
    category: PromptCategory.INTENTION,
    question: `What is the first thing you do when you wake up in the morning?`,
  },
  {
    pageNumber: 18,
    category: PromptCategory.INTENTION,
    question: `What makes you feel productive`,
  },
  {
    pageNumber: 19,
    category: PromptCategory.INTENTION,
    question: `What makes you feel unproductive?`,
  },
  {
    pageNumber: 20,
    category: PromptCategory.INTENTION,
    question: `How do you spend you time?`,
  },
  {
    pageNumber: 21,
    category: PromptCategory.INTENTION,
    question: `How do you spend your money?`,
  },
  {
    pageNumber: 22,
    category: PromptCategory.INTENTION,
    question: `What is your deepest desire at the moment?`,
  },
  {
    pageNumber: 23,
    category: PromptCategory.INTENTION,
    question: `What do you want to attract more of in your life?`,
  },
  {
    pageNumber: 24,
    category: PromptCategory.INTENTION,
    question: `Describe your ideal day.`,
  },
  {
    pageNumber: 25,
    category: PromptCategory.INTENTION,
    question: `What is one of your short-term goals?`,
  },
  {
    pageNumber: 26,
    category: PromptCategory.INTENTION,
    question: `What is one of your long-term goals?`,
  },
  {
    pageNumber: 27,
    category: PromptCategory.INTENTION,
    question: `Are your current habits getting you closer to your goals?`,
  },
  {
    pageNumber: 28,
    category: PromptCategory.INTENTION,
    question: `What is something that has been on your wish list for awhile?`,
  },
  {
    pageNumber: 29,
    category: PromptCategory.INTENTION,
    question: `List 3 things you could do to make life more fun.`,
  },
  {
    pageNumber: 30,
    category: PromptCategory.INTENTION,
    question: `What do you do to signal work is done for the day?`,
  },
  {
    pageNumber: 31,
    category: PromptCategory.INTENTION,
    question: `What would your ideal environment look and feel like?`,
  },
  {
    pageNumber: 32,
    category: PromptCategory.INTENTION,
    question: `How do you define success?`,
  },
  {
    pageNumber: 34,
    category: PromptCategory.HEALING,
    question: `How does your emotional pain express itself?`,
  },
];
