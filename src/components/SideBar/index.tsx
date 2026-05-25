import contactIcon from '@/assets/images/sidebar/contact.png';
import jobIcon from '@/assets/images/sidebar/job.png';
import myselfIcon from '@/assets/images/sidebar/myself.png';
import projectIcon from '@/assets/images/sidebar/project.png';
import serviceIcon from '@/assets/images/sidebar/service.png';
import board from '@/assets/images/sidebar/board.png';

const MENU_ITEMS = [
  {
    src: myselfIcon,
    key: 'Myself',
    width: '170px',
    height: '90px',
  },
  {
    src: jobIcon,
    key: 'Job',
    width: '170px',
    height: '90px',
  },
  {
    src: projectIcon,
    key: 'Project',
    width: '170px',
    height: '90px',
  },
  {
    src: serviceIcon,
    key: 'Service',
    width: '170px',
    height: '90px',
  },
  {
    src: contactIcon,
    key: 'Contact',
    width: '125px',
    height: '80px',
  },
];

export const SideBar = () => {
  return (
    <aside className="fixed left-0 top-0 ml-[-25px] w-[200px] h-screen flex items-center justify-center z-50">
      <ul className="flex flex-col items-center gap-4">
        {MENU_ITEMS.map((item) => (
          <li key={item.key}>
            <a href="#" className="flex flex-col items-center">
              <img
                src={item.src}
                alt={item.key}
                className={`w-[${item.width}] h-[${item.height}] object-contain mb-[-37px] ml-[-15px]`}
              />
              <div className="relative">
                <img src={board} alt="Board" className="w-[200px] h-[110px]" />
                <span className="absolute inset-0 flex items-center justify-center ml-[-17px] mt-[-7px] text-[17px] font-bold text-[#3C2F2F] font-['Syne']">
                  {item.key}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
