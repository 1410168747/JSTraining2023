import React from "react";
import { useSettings } from "~/components/hooks/UseSettings";
import { SettingsType } from "~/types/ResultType";

export const SettingsView: React.FC = () => {
  const { settings, setSettings } = useSettings();

  const handleSettingsChange = (newSettings: SettingsType) => {
    setSettings(newSettings);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <p>ヒントが</p>
        <button
          style={{ marginLeft: "10px" }}
          onClick={() =>
            handleSettingsChange({
              showHint: !settings.showHint,
              doShuffle: settings.doShuffle,
            })
          }
        >
          {settings.showHint ? "みえます" : "みえません"}
        </button>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <p>もんだいがシャッフル</p>
        <button
          style={{ marginLeft: "10px" }}
          onClick={() =>
            handleSettingsChange({
              showHint: settings.showHint,
              doShuffle: !settings.doShuffle,
            })
          }
        >
          {settings.doShuffle ? "されます" : "されません"}
        </button>
      </div>
    </div>
  );
};

export default SettingsView;
