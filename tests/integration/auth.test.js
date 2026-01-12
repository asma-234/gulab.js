const request = require("supertest");
const app = require("../../app");

describe("Auth API Integration Test", () => {
  test("POST /api/auth/login should fail with invalid credentials", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "wrong@email.com",
        password: "123456"
      });

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("message");
  });
});
