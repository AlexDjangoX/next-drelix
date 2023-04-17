import Spodnie from '../../components/spodnie/Spodnie.js';
import { supabase } from '../../utils/supabaseClient.js';

const index = ({ pants }) => {
  console.log(pants);
  return <Spodnie pants={pants} />;
};

export async function getServerSideProps() {
  const { data: pants, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'pants');

  if (error) {
    console.error('Error fetching gloves:', error);
    return { notFound: true };
  }

  return {
    props: {
      pants,
    },
  };
}

export default index;
