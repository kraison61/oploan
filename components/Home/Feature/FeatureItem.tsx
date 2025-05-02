import { FC, ReactNode } from "react";

interface FeatureItemProps {
  icon: ReactNode;
  title: string;
}

export const FeatureItem: FC<FeatureItemProps> = ({ icon, title }) => (
  <div className="flex items-center space-x-3">
    <div className="text-2xl">{icon}</div>
    <p className="text-lg font-medium">{title}</p>
  </div>
);
