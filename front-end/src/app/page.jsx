import { Loading } from "@/components/Loading";
import { SignInPage } from "@/components/pages/SignInPage";

export default function Home() {
  return (
    <div>
      <SignInPage />
      <Loading />
    </div>
  );
}
