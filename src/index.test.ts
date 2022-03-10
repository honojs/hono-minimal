import { app } from './index'

describe('Test the application', () => {
  it('should return 200 response', async () => {
    const req = new Request('http://localhost/')
    const res = await app.dispatch(req)
    expect(res.status).toBe(200)
  })
})
