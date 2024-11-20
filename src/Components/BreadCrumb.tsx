'use client';

import Link from 'next/link';

interface BreadcrumbProps {
  items: { label: string, path: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-gray-600 mb-4">
      <ol className="list-reset flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <Link href={item.path}>
              <a className="text-blue-500 hover:text-blue-700">{item.label}</a>
            </Link>
            {index < items.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
