import { redirect } from "next/navigation";

export default async function PortfolioRedirect() {
  redirect("/work");
}
