const AuthController = require("../../controllers/AuthController");

describe("Auth Controller Unit Test", () => {
  test("should return error if email or password missing", async () => {
    const req = {
      body: { email: "", password: "" }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await AuthController.login(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        message: expect.any(String)
      })
    );
  });
});
