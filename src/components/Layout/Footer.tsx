import { APP_VERSION } from "config";

export const Footer = () => {
  return (
    <footer className="mt-24 text-secondary">
      {APP_VERSION && (
        <p className="text-right mr-2 text-sm">version {APP_VERSION}</p>
      )}
      <div className="bg-primary p-4  border-t border-primary2">
        <div className="flex flex-col items-center content-center"></div>
      </div>
    </footer>
  );
};
