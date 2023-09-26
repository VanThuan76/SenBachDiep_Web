import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/router';

type Props = {
  url: string;
  title: string;
  className?: string
};
const Breadcrumb = ({ url, title, className }: Props) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(url)} className={`mt-5 w-full flex-row-start gap-3 hover:underline cursor-pointer ${className}`}>
      <ChevronLeft size={24} />
      <p className='text-sm'>{title}</p>
    </div>
  );
};

export default Breadcrumb;
