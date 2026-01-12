const request = require("supertest");
const app = require("../../app");

describe("Admin API Integration Test", () => {
  test("GET /api/admin should fail without token", async () => {
    const res = await request(app).get("/api/admin");

    expect(res.statusCode).toBe(401);
  });
});
