"use client";
import { logOut } from "@/firebase/signup";
import Layout from "../../components/LayoutEdit";

export default function Profile() {
  return (
    <>
      <Layout>
        <div>
          <p>profile page</p>
          <button onClick={logOut}>Logout</button>
        </div>
      </Layout>
    </>
  );
}
