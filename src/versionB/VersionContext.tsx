import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type HomeVersion = "A" | "B";

const STORAGE_KEY = "em-home-version";

type VersionContextValue = {
  version: HomeVersion;
  setVersion: (v: HomeVersion) => void;
  toggle: () => void;
};

const VersionContext = createContext<VersionContextValue | null>(null);

function readInitial(): HomeVersion {
  if (typeof window === "undefined") return "A";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "B" ? "B" : "A"; // default Version A
}

export function VersionProvider({ children }: { children: React.ReactNode }) {
  const [version, setVersionState] = useState<HomeVersion>(readInitial);

  // Persist so a refresh keeps the selected version.
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, version);
  }, [version]);

  const setVersion = useCallback((v: HomeVersion) => setVersionState(v), []);
  const toggle = useCallback(
    () => setVersionState((v) => (v === "A" ? "B" : "A")),
    []
  );

  return (
    <VersionContext.Provider value={{ version, setVersion, toggle }}>
      {children}
    </VersionContext.Provider>
  );
}

export function useVersion() {
  const ctx = useContext(VersionContext);
  if (!ctx) throw new Error("useVersion must be used within VersionProvider");
  return ctx;
}
