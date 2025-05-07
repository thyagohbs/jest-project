"use client";
import React, { useState } from "react";

interface Tab {
    label: string;
    conteudo: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [abaAtiva, setAbaAtiva] = useState(0); // Começa na primeira aba

    return (
        <div>
            <div style={{ display: "flex", gap: "1rem" }}>
                {tabs.map((tab, idx) => (
                    <button
                        key={tab.label}
                        onClick={() => setAbaAtiva(idx)}
                        style={{
                            fontWeight: abaAtiva === idx ? "bold" : "normal",
                            borderBottom: abaAtiva === idx ? "2px solid blue" : "none",
                        }}
                        aria-selected={abaAtiva === idx}
                        aria-controls={`tab-panel-${idx}`}
                        role="tab"
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div
                id={`tab-panel-${abaAtiva}`}
                role="tabpanel"
                style={{ marginTop: "1rem" }}
            >
                {tabs[abaAtiva].conteudo}
            </div>
        </div>
    );
};

export default Tabs;