// ==========================================
// DATA STRUCTURE
// ==========================================
const toolsData = [
    {
        name: "Antigravity",
        url: "https://antigravity.google/download",
        persona: "D. Early Technical Co-Founder",
        workflow: "Agentic IDE",
        aiIndependenceLevels: "4. Agency",
        llm: "Claude Opus 4.5, Gemini 3",
        pricing: "Free / $20 / $250",
        indemnity: "No",
        notes: "Partner architecture; provides maximum developer control by executing tool commands only on explicit prompts. No background watcher daemon."
    },
    {
        name: "Claude Code",
        url: "https://code.claude.com/docs/en/setup",
        persona: "D. Early Technical Co-Founder",
        workflow: "CLI, IDE Integration",
        aiIndependenceLevels: "4. Agency",
        llm: "Claude Opus 4.5",
        pricing: "$20 / Usage Based",
        indemnity: "No",
        notes: "Multi-platform agentic coding assistant (CLI, IDE, web, mobile) powered by Claude Opus 4.5. Reads entire codebases with full project context awareness. Autonomously edits files, executes commands, manages git workflows, and implements solutions end-to-end. Suited for complex architectural reasoning and hands-on development tasks in a collaborative, real-time workflow."
    },
    {
        name: "OpenAI Codex",
        url: "https://developers.openai.com/codex/cli/",
        persona: "D. Early Technical Co-Founder",
        workflow: "CLI, IDE Integration",
        aiIndependenceLevels: "4. Agency",
        llm: "GPT-5.2",
        pricing: "$20 / Usage Based",
        indemnity: "No",
        notes: "Cloud‑native coding agent powered by GPT-5.2. Codex can run multiple tasks concurrently in isolated cloud sandbox environments, with each task preloaded with your codebase and dependencies. It is accessible via cloud, local CLI, and IDE interfaces (including VS Code, Cursor, and others) so developers can pair with Codex locally or delegate background work to the cloud. Codex compacts context to manage long sessions, preserving relevant state as it approaches context limits to support sustained and complex coding tasks. The system’s ability to run independent cloud tasks in parallel across workflows is a core aspect of its design for broad‑scope software development."
    },
    {
        name: "Cursor",
        url: "https://cursor.com/download",
        persona: "C. Product Engineer",
        workflow: "Agentic IDE",
        aiIndependenceLevels: "3. Autonomy",
        llm: "Claude Opus 4.5, Gemini 3, GPT-5.2, Composer-1, Local Ollama, Remote BYOK",
        pricing: "Free / $20 / $40 / $60 / $200 / Usage Based",
        indemnity: "No",
        notes: "Focuses on speed & precision with a side-panel chat and Composer for multi-file edits. Deep Git integration, acting like a GitHub teammate to auto-generate commits & reviews."
    },
    {
        name: "Windsurf",
        url: "https://windsurf.com/download",
        persona: "C. Product Engineer",
        workflow: "Agentic IDE",
        aiIndependenceLevels: "3. Autonomy",
        llm: "Claude Opus 4 BYOK, Gemini 2.5, GPT-5.2, SWE-1.5",
        pricing: "Free / $15 / $30 / Usage Based",
        indemnity: "No",
        notes: "Cascade agent with dense reasoning over implicit user intent. Real-time flow awareness tracking actions, edits, commands, conversation history, clipboard, and terminal activity. Built-in browser integration with multi-file context and project-wide understanding."
    },
    {
        name: "Aider",
        url: "https://aider.chat/#getting-started",
        persona: "B. Core Developer",
        workflow: "Task-focused CLI automation",
        aiIndependenceLevels: "3. Autonomy",
        llm: "Local Ollama, Remote BYOK",
        pricing: "Usage Based",
        indemnity: "No",
        notes: "Autonomous task completion & CLI productivity."
    },
    {
        name: "GitHub Copilot",
        url: "https://marketplace.visualstudio.com/items?itemName=GitHub.copilot",
        persona: "B. Core Developer",
        workflow: "IDE Integration",
        aiIndependenceLevels: "3. Autonomy",
        llm: "Claude Opus 4.5, Gemini 3, GPT-5.2, Local Ollama, Remote BYOK",
        pricing: "Free / $10 / Usage Based",
        indemnity: "Yes",
        notes: "Advanced code generation and refactoring. Can autonomously handle small to medium tasks like implementing functions or fixing bugs based on user prompts."
    },
    {
        name: "Jules",
        url: "https://jules.google/",
        persona: "B. Core Developer",
        workflow: "GitHub Agent",
        aiIndependenceLevels: "3. Autonomy",
        llm: "Gemini 2.5, 3",
        pricing: "Free / $20 / $250",
        indemnity: "No",
        notes: "Google's AI code agent that integrates directly into GitHub. It acts as a teammate, autonomously handling code reviews, migrations, and complex refactoring tasks via Pull Requests."
    },
    {
        name: "Roo Code",
        url: "https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline",
        persona: "A. Technical Product Manager",
        workflow: "Task-focused IDE automation",
        aiIndependenceLevels: "3. Autonomy",
        llm: "Local Ollama, Remote BYOK",
        pricing: "Usage Based",
        indemnity: "No",
        notes: "Specialized Autonomy: Uses multi-personality agents for role-based automation."
    },
    {
        name: "Cline",
        url: "https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev",
        persona: "A. Technical Product Manager",
        workflow: "Task-focused IDE automation",
        aiIndependenceLevels: "2. Augmentation",
        llm: "Local Ollama, Remote BYOK",
        pricing: "Usage Based",
        indemnity: "No",
        notes: "Supervised Action: Requires explicit permission for every command/change."
    },
    {
        name: "Kilo Code",
        url: "https://marketplace.visualstudio.com/items?itemName=kilocode.Kilo-Code",
        persona: "A. Technical Product Manager",
        workflow: "Task-focused IDE automation",
        aiIndependenceLevels: "2. Augmentation",
        llm: "Local Ollama, Remote BYOK",
        pricing: "Usage Based",
        indemnity: "No",
        notes: "Orchestrated Guidance: Breaks tasks into sub-steps with a visible to-do list."
    },
    {
        name: "AI Studio",
        url: "https://aistudio.google.com/apps",
        persona: "A. Technical Product Manager",
        workflow: "Web IDE",
        aiIndependenceLevels: "1. Assistance",
        llm: "Gemini 3",
        pricing: "Free",
        indemnity: "No",
        notes: "Acts as a senior frontend engineer with UI/UX expertise. Creatively interprets meta-commands like commit as chat prompts to commit to building new features."
    }
];

// ==========================================
// ESCAPE HTML UTILITY
// ==========================================
function escapeHTML(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>"']/g, function(m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }[m];
    });
}

// ==========================================
// STATE MANAGEMENT
// ==========================================
let state = {
    data: [...toolsData],
    sortCol: null,
    sortAsc: false,
    filter: ''
};

// ==========================================
// RENDERING
// ==========================================
function getBadge(value, type) {
    const v = value.toLowerCase();
    let classes = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ";

    if (type === 'aiIndependenceLevels') {
        if (v.includes('agency')) classes += "bg-indigo-100 text-indigo-800 border border-indigo-200";
        else if (v.includes('autonomy')) classes += "bg-purple-100 text-purple-800 border border-purple-200";
        else if (v.includes('augmentation')) classes += "bg-blue-100 text-blue-800 border border-blue-200";
        else if (v.includes('assistance')) classes += "bg-slate-100 text-slate-700 border border-slate-200";
        else classes += "bg-slate-100 text-slate-800";
    } else if (type === 'persona') {
        // Mapped to Persona
        // D. Early Technical Co-Founder (Indigo)
        if (v.includes('early technical co-founder')) classes += "bg-indigo-100 text-indigo-800 border border-indigo-200";
        // C. Product Engineer (Purple)
        else if (v.includes('product engineer')) classes += "bg-purple-100 text-purple-800 border border-purple-200";
        // B. Core Developer (Blue)
        else if (v.includes('core developer')) classes += "bg-blue-100 text-blue-800 border border-blue-200";
        // A. Technical Product Manager (Slate)
        else if (v.includes('technical product manager') || v.includes('product manager')) classes += "bg-slate-100 text-slate-700 border border-slate-200";

        else classes += "bg-slate-50 text-slate-600 border border-slate-100";
    }
    return `<span class="${classes}">${escapeHTML(value)}</span>`;
}

function renderTable() {
    const tbody = document.getElementById('tableBody');
    if (state.data.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" class="text-center py-12 text-slate-500 italic">
                    No tools match your filter.
                </td>
            </tr>
        `;
    } else {
        tbody.innerHTML = state.data.map(row => `
            <tr class="hover:bg-indigo-50 transition-colors">
                <td class="px-6 py-4 text-slate-600 text-xs leading-relaxed max-w-xs">${escapeHTML(row.llm)}</td>
                <td class="px-6 py-4 font-semibold text-slate-900">
                    ${row.url ? `<a href="${row.url}" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:underline hover:text-indigo-800 transition-colors">${escapeHTML(row.name)}</a>` : escapeHTML(row.name)}
                </td>
                <td class="px-6 py-4">${getBadge(row.aiIndependenceLevels, 'aiIndependenceLevels')}</td>
                <td class="px-6 py-4">${getBadge(row.persona, 'persona')}</td>
                <td class="px-6 py-4 text-slate-600">${escapeHTML(row.workflow)}</td>
                <td class="px-6 py-4 text-slate-600">${escapeHTML(row.pricing)}</td>
                <td class="px-6 py-4 ${row.indemnity === 'Yes' ? 'font-bold text-green-600' : 'text-slate-600'}">${escapeHTML(row.indemnity)}</td>
                <td class="px-6 py-4 text-sm text-slate-500">${escapeHTML(row.notes)}</td>
            </tr>
        `).join('');
    }

    // Update Sort Icons
    document.querySelectorAll('.sort-icon').forEach(icon => {
        icon.innerHTML = '↕';
        icon.classList.add('opacity-30');
    });
    if (state.sortCol) {
        const icon = document.getElementById(`sort-${state.sortCol}`);
        if (icon) {
            icon.innerHTML = state.sortAsc ? '↑' : '↓';
            icon.classList.remove('opacity-30');
        }
    }
}

// ==========================================
// DEBOUNCE
// ==========================================
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// ==========================================
// LOGIC
// ==========================================
window.handleKeySort = function(event, col) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        sortTable(col);
    }
}

window.sortTable = function(col) {
    if (state.sortCol === col) {
        state.sortAsc = !state.sortAsc;
    } else {
        state.sortCol = col;
        state.sortAsc = true; // Default to Ascending on first click
    }

    state.data.sort((a, b) => {
        let valA = a[col];
        let valB = b[col];

        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();

        if (valA < valB) return state.sortAsc ? -1 : 1;
        if (valA > valB) return state.sortAsc ? 1 : -1;
        return 0;
    });

    renderTable();
};

window.filterTable = function() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();

    // Filter original data source
    state.data = toolsData.filter(row => {
        // Perf optimization: Use for...of with Object.keys to avoid iterating over prototype properties
        // and to prevent creating an unnecessary intermediate array like Object.values() does.
        for (const key of Object.keys(row)) {
            if (String(row[key]).toLowerCase().includes(filter)) {
                return true;
            }
        }
        return false;
    });

    // Re-apply sort if exists
    if (state.sortCol) {
        // A bit of a shortcut: re-run the sort logic by inverting the order and calling again
        // This ensures the filtered list is sorted correctly
        state.sortAsc = !state.sortAsc;
        sortTable(state.sortCol);
    } else {
         renderTable();
    }

};

// ==========================================
// EXTERNAL SEARCH HANDLING
// ==========================================

const searchBtn = document.getElementById('searchGoogleBtn');
const searchInput = document.getElementById('researchPrompt');
const DEFAULT_QUERY = "Antigravity vs Windsurf vs Cursor | Browser and Git Features | 2026 | Today";

function performGoogleSearch() {
    let query = searchInput.value.trim();
    if (!query) {
        query = DEFAULT_QUERY;
    }
    if (query) {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    }
}

if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', performGoogleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performGoogleSearch();
    });
}

// ==========================================
// CHART MODAL LOGIC
// ==========================================

// Extracted data from the provided JSON file
const benchmarkData = [
  {"name": "Claude 4.5 Opus medium (20251101)", "resolved": 74.4},
  {"name": "Gemini 3 Pro Preview (2025-11-18)", "resolved": 74.2},
  {"name": "GPT-5.1-Codex (high)", "resolved": 73.7},
  {"name": "GPT-5.2 (2025-12-11) (high reasoning)", "resolved": 71.8},
  {"name": "Claude 4.5 Sonnet (20250929)", "resolved": 70.6},
  {"name": "GPT-5.2 (2025-12-11)", "resolved": 69},
  {"name": "Claude 4 Opus (20250514)", "resolved": 67.6},
  {"name": "GPT-5.1-codex (medium reasoning)", "resolved": 66},
  {"name": "GPT-5.1 (2025-11-13) (medium reasoning)", "resolved": 66},
  {"name": "GPT-5 (2025-08-07) (medium reasoning)", "resolved": 65},
  {"name": "Kimi K2 Thinking", "resolved": 63.4},
  {"name": "Minimax M2", "resolved": 61},
  {"name": "DeepSeek V3.2 Reasoner", "resolved": 60},
  {"name": "o3 (2025-04-16)", "resolved": 58.4},
  {"name": "Devstral small (2512)", "resolved": 56.4},
  {"name": "Qwen3-Coder 480B/A35B Instruct", "resolved": 55.4},
  {"name": "GLM-4.6 (T=1)", "resolved": 55.4},
  {"name": "GLM-4.5 (2025-08-22)", "resolved": 54.2},
  {"name": "Devstral (2512)", "resolved": 53.8},
  {"name": "Gemini 2.5 Pro (2025-05-06)", "resolved": 53.6},
  {"name": "o4-mini (2025-04-16)", "resolved": 45},
  {"name": "Kimi K2 Instruct", "resolved": 43.8},
  {"name": "GPT-4.1 (2025-04-14)", "resolved": 39.58},
  {"name": "GPT-5 nano (2025-08-07) (medium reasoning)", "resolved": 34.8},
  {"name": "Gemini 2.5 Flash (2025-04-17)", "resolved": 28.73},
  {"name": "gpt-oss-120b", "resolved": 26},
  {"name": "GPT-4.1-mini (2025-04-14)", "resolved": 23.94},
  {"name": "GPT-4o (2024-11-20)", "resolved": 21.62},
  {"name": "Llama 4 Maverick Instruct", "resolved": 21.04},
  {"name": "Gemini 2.0 flash", "resolved": 13.52},
  {"name": "Llama 4 Scout Instruct", "resolved": 9.06},
  {"name": "Qwen2.5-Coder 32B Instruct", "resolved": 9}
];

let chartInstance = null;

window.openModal = function() {
    const modal = document.getElementById('benchmarkModal');
    modal.classList.remove('hidden');
    // Little timeout to allow display:block to apply before opacity transition
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        const panel = document.getElementById('modalPanel');
        panel.classList.remove('scale-95');
        panel.classList.add('scale-100');
    }, 10);

    // Initialize chart if not already done
    if (!chartInstance) {
        setTimeout(initChart, 100); // Slight delay for modal render
    }
};

window.closeModal = function() {
    const modal = document.getElementById('benchmarkModal');
    const panel = document.getElementById('modalPanel');

    modal.classList.add('opacity-0');
    panel.classList.remove('scale-100');
    panel.classList.add('scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300); // Match duration-300
};

function initChart() {
    const ctx = document.getElementById('sweBenchChart').getContext('2d');

    const labels = benchmarkData.map(d => d.name);
    const dataValues = benchmarkData.map(d => d.resolved);

    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '% Resolved',
                data: dataValues,
                backgroundColor: '#6366f1', // Indigo-500 matching theme
                borderRadius: 4,
                barPercentage: 0.7,
                categoryPercentage: 0.8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.9)', // Slate-900
                    padding: 12,
                    titleFont: { family: 'Inter', size: 13 },
                    bodyFont: { family: 'Inter', size: 13 },
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y + '% Resolved';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 80,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        stepSize: 10,
                        color: '#64748b',
                        font: { family: 'Inter' }
                    },
                    grid: {
                        color: '#f1f5f9',
                        drawBorder: false
                    },
                    title: {
                        display: true,
                        text: '% Resolved (SWE-bench Verified)',
                        color: '#475569',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    }
                },
                x: {
                    ticks: {
                        autoSkip: false,
                        maxRotation: 45,
                        minRotation: 45,
                        color: '#334155',
                        font: {
                            size: 10,
                            family: 'Inter'
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalBackdrop = document.getElementById('modalBackdrop');

    if (openModalBtn) {
        openModalBtn.addEventListener('click', () => openModal());
    }
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => closeModal());
    }
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', () => closeModal());
    }

    // Table sorting
    document.querySelectorAll('th[data-sort]').forEach(header => {
        header.addEventListener('click', () => sortTable(header.dataset.sort));
        header.addEventListener('keydown', (event) => handleKeySort(event, header.dataset.sort));
    });

    // ==========================================
    // DEBOUNCED SEARCH
    // ==========================================
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        // Apply debounce to the filterTable function with a 300ms delay
        searchInput.addEventListener('keyup', debounce(filterTable, 300));
    }

    // ==========================================
    // LICENSE MODAL LOGIC
    // ==========================================
    const licenseLink = document.getElementById('licenseLink');
    const licenseModal = document.getElementById('licenseModal');
    const closeLicenseModalBtn = document.getElementById('closeLicenseModal');
    const licenseTextEl = document.getElementById('licenseText');

    if (licenseLink && licenseModal && closeLicenseModalBtn && licenseTextEl) {
        let licenseContent = null;
        const licenseUrl = 'https://raw.githubusercontent.com/lloydchang/ai-coding-tools-comparison/main/LICENSE';

        const openLicenseModal = async () => {
            if (!licenseContent) {
                try {
                    licenseTextEl.textContent = 'Loading...';
                    const response = await fetch(licenseUrl);
                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                    licenseContent = await response.text();
                    licenseTextEl.textContent = licenseContent;
                } catch (error) {
                    console.error('Failed to fetch license:', error);
                    licenseTextEl.textContent = 'Failed to load license content. Please try again later.';
                    licenseContent = null; // Allow refetching
                }
            }
            licenseModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        };

        const closeLicenseModal = () => {
            licenseModal.classList.add('hidden');
            document.body.style.overflow = '';
        };

        licenseLink.addEventListener('click', (event) => {
            event.preventDefault();
            openLicenseModal();
        });

        closeLicenseModalBtn.addEventListener('click', closeLicenseModal);

        licenseModal.addEventListener('click', (event) => {
            if (event.target === licenseModal) {
                closeLicenseModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !licenseModal.classList.contains('hidden')) {
                closeLicenseModal();
            }
        });
    }

    function multiLevelSort(a, b) {
        // 1. AI Independence Levels (desc)
        const aiIndependenceLevelsA = parseInt(a.aiIndependenceLevels.split('.')[0]);
        const aiIndependenceLevelsB = parseInt(b.aiIndependenceLevels.split('.')[0]);
        if (aiIndependenceLevelsA !== aiIndependenceLevelsB) return aiIndependenceLevelsB - aiIndependenceLevelsA;

        // 2. Target User Persona (desc)
        const personaA = a.persona.split('.')[0];
        const personaB = b.persona.split('.')[0];
        if (personaA !== personaB) return personaB.localeCompare(personaA);

        // 6. Tool Name (asc) as a final tie-breaker
        return a.name.localeCompare(b.name);
    }

    state.data.sort(multiLevelSort);

    // Set the primary sort indicator for the UI
    state.sortCol = 'aiIndependenceLevels';
    state.sortAsc = false;

    renderTable();
});
