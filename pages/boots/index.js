import { supabase } from '../../utils/supabaseClient.js';
import Boots from '../../components/boots/Boots.js';

const index = ({ sandals, halfBoots, fullBoots }) => {
  return (
    <Boots halfBoots={halfBoots} sandals={sandals} fullBoots={fullBoots} />
  );
};

export async function getServerSideProps() {
  const { data: sandals, error: error1 } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'sandals');

  const { data: halfBoots, error: error2 } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'halfBoots');

  const { data: fullBoots, error: error3 } = await supabase
    .from('products')
    .select('*')
    .eq('category', 'fullBoots');

  if (error1 || error2 || error3) {
    console.error('Error fetching products:', error1 || error2);
    return { notFound: true };
  }

  return {
    props: {
      sandals,
      halfBoots,
      fullBoots,
    },
  };
}

export default index;
