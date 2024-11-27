export type MessageList = {
  id: number;
  imgUrl: string | null;
  name: string;
  skill: string;
  lastMessage: string;
  messageDeliveryDate: string; // it could be date. Then have to calculate the day
  imgAlt: string;
  hasPrevConversation: boolean;
  conversationId: number | null;
  status: "ACTIVE" | "INACTIVE";
  isGrouped: boolean;
};

export const messageLists: MessageList[] = [
  {
    id: 1,
    imgUrl: "/img/profile/ali-d.svg",
    lastMessage: "Okay",
    messageDeliveryDate: "9/6/24",
    name: "Ali D.",
    skill: "ABC Technologies LLP",
    imgAlt: "Ali D",
    hasPrevConversation: true,
    conversationId: 1,
    status: "ACTIVE",
    isGrouped: false,
  },
  {
    id: 2,
    imgUrl: "/img/profile/zainab.svg",
    lastMessage: "",
    messageDeliveryDate: "25/6/24",
    name: "Zainab",
    skill: "Make Rust Back-end & Graph...",
    imgAlt: "Zainab",
    hasPrevConversation: false,
    conversationId: null,
    status: "INACTIVE",
    isGrouped: false,
  },
  {
    id: 3,
    imgUrl: "/img/profile/recruit-events.svg",
    imgAlt: "Recruit Events",
    lastMessage: "On-demand Learning: Hi Muha...",
    messageDeliveryDate: "14/6/24",
    name: "Recruit Events",
    skill: "ABC Technologies LLP",
    hasPrevConversation: true,
    conversationId: 3,
    status: "INACTIVE",
    isGrouped: true,
  },
  {
    id: 4,
    imgUrl: "/img/profile/muhammad-i.svg",
    imgAlt: "Muhammad I",
    lastMessage: "Okay, Thanks",
    messageDeliveryDate: "10/6/24",
    name: "Muhammad l.",
    skill: "UX/UI Design",
    hasPrevConversation: true,
    conversationId: 4,
    status: "ACTIVE",
    isGrouped: false,
  },
  {
    id: 5,
    imgUrl: null,
    imgAlt: "AD",
    lastMessage: "Okay",
    messageDeliveryDate: "9/6/24",
    name: "Ahammad D.",
    skill: "ABC Technologies LLP",
    hasPrevConversation: true,
    conversationId: 5,
    status: "INACTIVE",
    isGrouped: false,
  },
  {
    id: 6,
    imgUrl: "/img/profile/muhammad-ii.svg",
    imgAlt: "Muhammad I",
    lastMessage: "Okay, Thanks",
    messageDeliveryDate: "Yesterday",
    name: "Muhammad l.",
    skill: "UX/UI Design",
    hasPrevConversation: true,
    conversationId: 6,
    status: "ACTIVE",
    isGrouped: false,
  },
  {
    id: 7,
    imgUrl: "/img/profile/ali-d.svg",
    lastMessage: "Okay",
    messageDeliveryDate: "9/6/24",
    name: "Ali D.",
    skill: "ABC Technologies LLP",
    imgAlt: "Ali D",
    hasPrevConversation: true,
    conversationId: 7,
    status: "INACTIVE",
    isGrouped: false,
  },
  {
    id: 8,
    imgUrl: "/img/profile/zainab.svg",
    lastMessage: "Team: Than You For Your Answering",
    messageDeliveryDate: "25/6/24",
    name: "Zainab",
    skill: "Make Rust Back-end & Graph...",
    imgAlt: "Zainab",
    hasPrevConversation: true,
    conversationId: 8,
    status: "INACTIVE",
    isGrouped: false,
  },
  {
    id: 9,
    imgUrl: "/img/profile/recruit-events.svg",
    imgAlt: "Recruit Events",
    lastMessage: "On-demand Learning: Hi Muha...",
    messageDeliveryDate: "14/6/24",
    name: "Recruit Events",
    skill: "ABC Technologies LLP",
    hasPrevConversation: true,
    conversationId: 9,
    status: "INACTIVE",
    isGrouped: true,
  },
];

export type Conversations = {
  userId: number;
  messageList: (
    | {
        type: string;
        message: string;
        name?: undefined;
        size?: undefined;
      }
    | {
        type: string;
        name: string;
        size: string;
        message?: undefined;
      }
  )[];
  delivered: string;
};

const conversations: Conversations[] = [
  {
    userId: 1,
    messageList: [
      {
        type: "text",
        message: "Thanks for the invitation!",
      },
      {
        type: "text",
        message: " Let’s discuss your requirement in detail!",
      },
      {
        type: "text",
        message: "Best Regards",
      },
      {
        type: "text",
        message: "Muhammad.",
      },
      {
        type: "file",
        name: "20230502_Recruit",
        size: "15kb",
      },
    ],
    delivered: "Monday 24, 2024",
  },
  {
    userId: 5,
    messageList: [
      {
        type: "text",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      },
      {
        type: "file",
        name: "Screenshot 2024-05-30 at 4.07.06...",
        size: "159kb",
      },
    ],
    delivered: "Monday 24, 2024",
  },
  {
    userId: 6,
    messageList: [
      {
        type: "text",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      },
      {
        type: "file",
        name: "Screenshot 2024-05-30 at 4.07.06...",
        size: "159kb",
      },
    ],
    delivered: "Monday 24, 2024",
  },
];

//  ============ single users conversations. ============
type UserConversation = {
  messageList: (
    | {
        type: "TEXT";
        message: string;
        name?: undefined;
        size?: undefined;
      }
    | {
        type: "FILE";
        name: string;
        size: string;
        message?: undefined;
      }
  )[];
  imgUrl: string | null;
  name: string;
  messageDeliveryDate: string;
  messageDeliveryTime: string;
  imgAlt: string;
  status: "ACTIVE" | "INACTIVE";
};
