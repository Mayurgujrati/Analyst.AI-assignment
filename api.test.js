const request = require("supertest");
const app = require("./server"); // Assuming your server is in a file named server.js

describe("GET /api/data", () => {
  it("responds with JSON data", async () => {
    const response = await request(app).get("/api/data");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("yourDataProperty"); // Adjust this based on your actual data structure
  });
});
