import { supabase } from "../lib/supabaseClient";
import Form from "../components/form";

function Page({ ratings }) {
  return <Form />;
}

export async function getServerSideProps() {
  let { data } = await supabase.from("ratings").select();

  return {
    props: {
      ratings: data,
    },
  };
}

export default Page;
