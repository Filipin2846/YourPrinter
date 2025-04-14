// pages/logout.ts
import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Apaga o cookie do token JWT
  res.setHeader("Set-Cookie", `token=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax`)
  
  // Redireciona para o login
  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  }
}

export default function LogoutPage() {
  return null // Nunca será exibido, pois redireciona no SSR
}
