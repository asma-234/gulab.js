const request = require("supertest");
const app = require("../../app");

describe("Vacancies API Integration Test", () => {
  test("GET /api/vacancies should return list of vacancies", async () => {
    const res = await request(app).get("/api/vacancies");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
