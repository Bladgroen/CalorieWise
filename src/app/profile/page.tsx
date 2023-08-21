"use client";
import { useUser } from "../../auth/useUser";
import Layout from "../../components/LayoutEdit";

export default function Profile() {
  const { user, logout } = useUser();

  return (
    <>
      <Layout>
        <div>
          <p>profile page</p>
          <button onClick={logout}>Logout</button>
        </div>
      </Layout>
    </>
  );
}
