import * as React from 'react';
import { ChevronDown, ChevronRight, LogOut, Settings, Trophy, User2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

const RowAuthHeader = ({ title, icon, className }: { title: string; icon: React.ReactNode; className?: string }) => {
  return (
    <div className={`w-[200px] flex-row-between-center ${className}`}>
      <div className='flex-row-center gap-1'>
        {icon}
        <p>{title}</p>
      </div>
      <ChevronRight size={12} />
    </div>
  );
};
const AuthHeader = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='cursor-pointer'>
        <div className='hidden lg:flex flex-row-center gap-8'>
          {/* <p className='border-2 border-r-white'>{user}</p> */}
          <p className='pr-4 border-r-2 border-r-white'>Test</p>
          <div className='flex-row-end gap-4'>
            <div className='flex-col-end gap-2'>
              <p>Thành viên</p>
              <p>Nguyễn Đặng Minh</p>
            </div>
            <ChevronDown />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem>
          <RowAuthHeader icon={<User2 size={12} />} title='Tài khoản của tôi' />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <RowAuthHeader icon={<Settings size={12} />} className='pb-2 border-b-2 border-slate-100' title='Thay đổi mật khẩu' />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <RowAuthHeader icon={<Trophy size={12} />} title='Thành tích' />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <RowAuthHeader icon={<LogOut size={12} />} title='Đăng xuất' />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AuthHeader;
