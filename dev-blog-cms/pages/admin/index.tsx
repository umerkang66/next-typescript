import { NextPage } from 'next';
import AdminNav from '../../components/common/admin-nav';

type Props = {};

const Admin: NextPage<Props> = props => {
  return (
    <div>
      <AdminNav />
    </div>
  );
};

export default Admin;
