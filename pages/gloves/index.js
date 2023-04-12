import Gloves from '../../components/gloves/Gloves.js';
import { supabase } from '../../utils/supabaseClient.js';

const index = ({ gloves }) => {
  return <Gloves gloves={gloves} />;
};

export async function getServerSideProps() {
  const { data: gloves, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'gloves');

  if (error) {
    console.error('Error fetching gloves:', error);
    return { notFound: true };
  }

  return {
    props: {
      gloves,
    },
  };
}

export default index;
