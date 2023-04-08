import Shirts from '../../components/shirts/Shirts.js';
import { supabase } from '../../utils/supabaseClient.js';

const ShirtsPage = ({ shirts }) => {
  return <Shirts shirts={shirts} />;
};

export default ShirtsPage;

export async function getServerSideProps() {
  const { data: shirts, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'shirts');

  if (error) {
    console.error('Error fetching shirts:', error);
    return { notFound: true };
  }

  return {
    props: {
      shirts,
    },
  };
}
