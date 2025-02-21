import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const accessToken = searchParams.get('accessToken')
  const refreshToken = searchParams.get('refreshToken')

  if (accessToken && refreshToken) {
    // Set cookies for authentication
    cookies().set('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 15 * 60 // 15 minutes
    })

    cookies().set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 // 7 days
    })

    // Set authorization header cookie for API calls
    cookies().set('authorization', `Bearer ${accessToken}`, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 15 * 60 // 15 minutes
    })

    redirect('/')
  }

  redirect('/login?error=auth_failed')
}