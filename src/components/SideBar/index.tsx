import { useEffect, useState } from 'react';
import contactIcon from '@/assets/images/sidebar/contact.png';
import jobIcon from '@/assets/images/sidebar/job.png';
import myselfIcon from '@/assets/images/sidebar/myself.png';
import projectIcon from '@/assets/images/sidebar/project.png';
import serviceIcon from '@/assets/images/sidebar/service.png';
import board from '@/assets/images/sidebar/board.png';

interface MenuItem {
  src: string;
  key: string;
  id: string;
  width: string;
  height: string;
}

const MENU_ITEMS: MenuItem[] = [
  { src: myselfIcon, key: 'Myself', id: 'myself', width: '170px', height: '90px' },
  { src: jobIcon, key: 'Job', id: 'job', width: '170px', height: '90px' },
  { src: projectIcon, key: 'Project', id: 'project', width: '170px', height: '90px' },
  { src: serviceIcon, key: 'Service', id: 'service', width: '170px', height: '90px' },
  { src: contactIcon, key: 'Contact', id: 'contact', width: '125px', height: '80px' },
];

export const SideBar = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  // 1. Theo dõi cuộn chuột bằng Tọa độ thực tế
  useEffect(() => {
    const handleScrollSpy = () => {
      let currentActive = '';
      const triggerPoint = window.innerHeight / 3;

      MENU_ITEMS.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
            currentActive = item.id;
          }
        }
      });

      if (currentActive) {
        setActiveSection(currentActive);
      }
    };

    const timer = setTimeout(handleScrollSpy, 200);

    window.addEventListener('scroll', handleScrollSpy);
    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
      clearTimeout(timer);
    };
  }, []);

  // 2. Hàm xử lý CUỘN DỌC (Đã fix lỗi trượt ngang)
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <aside className="fixed left-0 top-0 ml-[-25px] w-[200px] h-screen flex items-center justify-center z-50">
      <ul className="flex flex-col items-center gap-4">
        {MENU_ITEMS.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <li key={item.key}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleScrollToSection(e, item.id)}
                className={`flex flex-col items-center transition-all duration-300 transform ${
                  isActive
                    ? 'scale-105 filter drop-shadow-[0_0_20px_rgba(233,212,185,0.95)] brightness-110'
                    : 'hover:scale-102 opacity-75 hover:opacity-100'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.key}
                  style={{ width: item.width, height: item.height }}
                  className="object-contain mb-[-37px] ml-[-15px]"
                />

                <div className="relative">
                  <img src={board} alt="Board" className="w-[200px] h-[110px]" />
                  <span className="absolute inset-0 flex items-center justify-center ml-[-17px] mt-[-7px] text-[17px] font-bold text-[#3C2F2F] font-['Syne']">
                    {item.key}
                  </span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};