'use client';

type CardProps = {
  title: string;
  value: number | string;
};

export default function Card({ title, value }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
      <h3 className="text-sm text-gray-500 dark:text-gray-400">
        {title}
      </h3>

      <p className="text-3xl font-bold text-gray-800 dark:text-white mt-2">
        {value}
      </p>
    </div>
  );
}