import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// const initialState = {
//   tweets: [
//     {
//       id: uuidv4(),
//       text: "Привет! #js #py",
//       createdAt: new Date("2022-03-09T23:03:00"),
//       author: "Zhenya",
//       comments: [],
//       icon: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",
//     },
//     {
//       id: uuidv4(),
//       text: "Как дела?",
//       createdAt: new Date("2022-08-08T23:00:01"),
//       author: "Петров Петр",
//       comments: [
//         {
//           id: uuidv4(),
//           text: "Хорошо, а у тебя?",
//           createdAt: new Date("2022-03-10T23:00:05"),
//           author: "Иванов Иван",
//         },
//         {
//           id: uuidv4(),
//           text: "Хорошо, а у тебя?",
//           createdAt: new Date("2022-03-09T23:00:05"),
//           author: "Иванов Иван",
//         },
//         {
//           id: uuidv4(),
//           text: "Хорошо, а у тебя?",
//           createdAt: new Date("2022-03-09T23:00:05"),
//           author: "Иванов Иван",
//         },
//         {
//           id: uuidv4(),
//           text: "Хорошо, а у тебя?",
//           createdAt: new Date("2022-12-12T23:00:05"),
//           author: "Иванов Иван",
//         },
//         {
//           id: uuidv4(),
//           text: "Хорошо, а у тебя?",
//           createdAt: new Date("2022-10-10T23:00:05"),
//           author: "Иванов Иван",
//         },
//         {
//           id: uuidv4(),
//           text: "Хорошо, а у тебя?",
//           createdAt: new Date("2022-03-09T23:00:05"),
//           author: "Иванов Иван",
//         },
//         {
//           id: uuidv4(),
//           text: "Хорошо, а у тебя?",
//           createdAt: new Date("2022-03-09T23:00:05"),
//           author: "Иванов Иван",
//         },
//         {
//           id: uuidv4(),
//           text: "Хорошо, а у тебя?",
//           createdAt: new Date("2022-03-09T23:00:05"),
//           author: "Иванов Иван",
//         },
//       ],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-10T23:10:00"),
//       author: "Андреев Давид",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Зачем нужен модуль?",
//       createdAt: new Date("2022-03-10T23:10:50"),
//       author: "Андреев Давид",
//       comments: [
//         {
//           id: uuidv4(),
//           text: "Модуль при помощи замыканий – это оборачивание пакета функциональности в единую внешнюю функцию, которая тут же выполняется.",
//           createdAt: new Date("2022-03-09T23:15:05"),
//           author: "Dolores Sanchez",
//         },
//       ],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории. #js",
//       createdAt: new Date("2022-03-09T23:20:00"),
//       author: "Алексеева Полина",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-09T23:30:00"),
//       author: "Robert Guzman",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: `'long' использует полное название месяца, 'short' для короткого названия, и 'narrow' для более минимальной версии, например первой буквы в алфавитных языках
//           Вы можете изменить локаль с браузерной 'default' на любую, которая вам понравится (e.g. 'en-us'), и она будет использовать правильное название для того language/country.
//           С помощью toLocaleStringapi приходится каждый раз проходить в локали и опциях. Если вы собираетесь делать использовать одну и ту же локаль инфой и варианты форматирования на кратные разные даты, то можете использовать Intl.DateTimeFormat вместо этого:`,
//       createdAt: new Date("2022-03-09T23:31:00"),
//       author: "Wayne Martin",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории. #py #cpp #js",
//       createdAt: new Date("2022-03-10T23:35:10"),
//       author: "Давид",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-09T23:40:44"),
//       author: "Женя",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-09T23:40:44"),
//       author: "Женя",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-09T23:40:44"),
//       author: "Женя",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-09T23:40:44"),
//       author: "Женя",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-09T23:40:44"),
//       author: "Женя",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-09T23:40:44"),
//       author: "Женя",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-09T23:40:44"),
//       author: "Женя",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-09T23:40:44"),
//       author: "Женя",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-09T23:40:44"),
//       author: "Женя",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-09T23:40:44"),
//       author: "Женя",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-09T23:40:44"),
//       author: "Женя",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-09T23:40:44"),
//       author: "Женя",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-09T23:40:44"),
//       author: "Женя",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-09T23:40:44"),
//       author: "Женя",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-09T23:40:44"),
//       author: "Женя",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-09T23:40:44"),
//       author: "Женя",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-10T03:00:50"),
//       author: "Ирина Лаптева",
//       comments: [
//         {
//           id: uuidv4(),
//           text: "Я пыталась заниматься йогой, но в позе лотоса уснула.",
//           createdAt: new Date("2022-03-09T23:15:05"),
//           author: "Dolores Sanchez",
//         },
//       ],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-10T03:10:00"),
//       author: "Дмитрий Лобанов",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-10T03:22:53"),
//       author: "Даниил Тимофеев",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-09T23:10:00"),
//       author: "Никита",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-19T11:10:00"),
//       author: "Ян",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-12T23:10:00"),
//       author: "Никита",
//       comments: [
//         {
//           id: uuidv4(),
//           text: "Я пыталась заниматься йогой, но в позе лотоса уснула.",
//           createdAt: new Date("2022-03-09T23:15:05"),
//           author: "Dolores Sanchez",
//         },
//         {
//           id: uuidv4(),
//           text: "Я пыталась заниматься йогой, но в позе лотоса уснула.",
//           createdAt: new Date("2022-03-09T23:15:05"),
//           author: "Dolores Sanchez",
//         },
//       ],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-03-18T13:40:50"),
//       author: "Олег",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Python",
//       createdAt: new Date("2022-03-09T23:00:05"),
//       author: "Mihnosha",
//       comments: [
//         {
//           id: uuidv4(),
//           text: "Я пыталась заниматься йогой, но в позе лотоса уснула.",
//           createdAt: new Date("2022-03-09T23:15:05"),
//           author: "Dolores Sanchez",
//         },
//       ],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-04-09T23:10:00"),
//       author: "Nata",
//       comments: [],
//     },
//     {
//       id: uuidv4(),
//       text: "Если смогу, я сделаю это. Конец истории.",
//       createdAt: new Date("2022-04-21T14:11:11"),
//       author: "Zhenya",
//       comments: [],
//     },
//   ],
//   filteredTweets: [],
//   month_names_short: [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ],
// };

const initialState = JSON.parse(localStorage.getItem("tweets"));

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    getTweets: (state, action) => {
      let filteredTweets = state.tweets
        .filter(
          (tweet) =>
            !action.payload.author ||
            tweet.author
              .toLowerCase()
              .includes(action.payload.author.toLowerCase())
        )
        .filter(
          (tweet) =>
            !action.payload.text ||
            tweet.text
              .toLowerCase()
              .includes(action.payload.text?.toLowerCase())
        )
        .filter(
          (tweet) =>
            !action.payload.dateFrom ||
            new Date(tweet.createdAt)
              .toLocaleDateString()
              .split(".")
              .reverse()
              .join("") >=
              new Date(action.payload.dateFrom)
                .toLocaleDateString()
                .split(".")
                .reverse()
                .join("")
        )
        .filter(
          (tweet) =>
            !action.payload.dateTo ||
            new Date(tweet.createdAt)
              .toLocaleDateString()
              .split(".")
              .reverse()
              .join("") <=
              new Date(action.payload.dateTo)
                .toLocaleDateString()
                .split(".")
                .reverse()
                .join("")
        );

      filteredTweets = action.payload.hashtag
        ? action.payload.hashtag
            .split(" ")
            .reduce(
              (tweets, elem) =>
                tweets.filter((tweet) => tweet.text.includes(elem)),
              filteredTweets
            )
        : filteredTweets;
      return { ...state, filteredTweets: [...filteredTweets] };
    },
    clearFilteredTweets(state) {
      return { ...state, filteredTweets: [] };
    },
    addTweet(state, action) {
      const newTweet = {
        id: uuidv4(),
        text: action.payload,
        createdAt: new Date(),
        author: JSON.parse(localStorage.getItem("user")).name,
        authorId: JSON.parse(localStorage.getItem("user")).id,
        comments: [],
      };
      return { ...state, tweets: [...state.tweets, newTweet] };
    },
    addComment(state, action) {
      const newComment = {
        id: uuidv4(),
        text: action.payload.value,
        createdAt: new Date(),
        author: JSON.parse(localStorage.getItem("user")).name,
        authorId: JSON.parse(localStorage.getItem("user")).id,
      };
      return {
        ...state,
        tweets: [
          ...state.tweets.map((tweet) =>
            tweet.id === action.payload.id
              ? { ...tweet, comments: [...tweet.comments, newComment] }
              : tweet
          ),
        ],
      };
    },
    deleteTweet(state, action) {
      console.log(action.payload);

      return {
        ...state,
        tweets: [
          ...state.tweets.filter((tweet) => tweet.id !== action.payload),
        ],
      };
    },
    deleteComment(state, action) {
      console.log(action.payload);
      return {
        ...state,
        tweets: [
          ...state.tweets.map((tweet) =>
            tweet.id === action.payload.tweetId
              ? {
                  ...tweet,
                  comments: [
                    ...tweet.comments.filter(
                      (comment) => comment.id !== action.payload.commentId
                    ),
                  ],
                }
              : tweet
          ),
        ],
      };
    },
    pagination(state,action){
      let num = action.payload;
      return num+=10;
    }
  },
});

export const {
  getTweets,
  addTweet,
  clearFilteredTweets,
  addComment,
  deleteTweet,
  deleteComment,
  pagination
} = tweetsSlice.actions;

export default tweetsSlice.reducer;
