import { supabase } from "../lib/supabaseClient";
import Form from "../components/form";

function Page() {
  return (
    <div className="absolute w-full h-screen">
      <div className="absolute w-[600px] h-[400px] top-[-200px] left-[-200px] bg-rose-400 rounded-full blur-[100px] opacity-20 dark:opacity-10" />
      <div className="absolute w-[800px] h-[500px] bottom-[-200px] right-0 bg-blue-300 rounded-full blur-[100px] opacity-20 dark:opacity-10" />
      <Form />
    </div>
  );
}

/* export async function getServerSideProps() {
  let { data } = await supabase.from("ratings").select();

  return {
    props: {
      ratings: data,
    },
  };
} */

export default Page;
