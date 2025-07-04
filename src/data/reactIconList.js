import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as TbIcons from 'react-icons/tb';
import * as HiIcons from 'react-icons/hi2';

export const reactIconObjects = [
  ...Object.entries(FaIcons).map(([title, icon]) => ({ title, icon })),
  ...Object.entries(MdIcons).map(([title, icon]) => ({ title, icon })),
  ...Object.entries(TbIcons).map(([title, icon]) => ({ title, icon })),
  ...Object.entries(HiIcons).map(([title, icon]) => ({ title, icon }))
];
