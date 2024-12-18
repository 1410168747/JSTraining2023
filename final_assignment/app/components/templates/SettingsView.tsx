import React from "react";
import { useSettings } from "~/components/hooks/UseSettings";
import { SettingsType } from "~/types/ResultType";

export const SettingsView: React.FC = () => {
  const { settings, setSettings } = useSettings();

  const handleSettingsChange = (newSettings: SettingsType) => {
    setSettings(newSettings);
  };

  return (
    <div>
      <button
        onClick={() =>
          handleSettingsChange({
            showHint: !settings.showHint,
            doShuffle: settings.doShuffle,
          })
        }
      >
        {settings.showHint ? "ヒントがみえます" : "ヒントがみえません"}
      </button>
      <button
        onClick={() =>
          handleSettingsChange({
            showHint: settings.showHint,
            doShuffle: !settings.doShuffle,
          })
        }
      >
        {settings.doShuffle ? "シャッフルされます" : "シャッフルされません"}
      </button>
    </div>
  );
};

export default SettingsView;
