import { rest } from "msw";
import { setupServer } from "msw/node";
import { getCharacters } from "./getCharacters";

const server = setupServer(
  rest.get("https://picsum.photos/v2/list", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "1",
          author: "User 1",
          download_url: "https://picsum.photos/id/1/200/300",
        },
        {
          id: "2",
          author: "User 2",
          download_url: "https://picsum.photos/id/2/200/300",
        },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("getCharacters returns the correct data", async () => {
  const result = await getCharacters(1);
  expect(result).toEqual([
    {
      id: "1",
      author: "User 1",
      download_url: "https://picsum.photos/id/1/200/300",
    },
    {
      id: "2",
      author: "User 2",
      download_url: "https://picsum.photos/id/2/200/300",
    },
  ]);
});
