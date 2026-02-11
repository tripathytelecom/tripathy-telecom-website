const mockTestData = {
    "GK": [
        {
            chapterName: "General Knowledge - Set 1",
            timeLimit: 60, // 60 seconds
            questions: [
                {
                    id: 1,
                    question: "What is the capital of India?",
                    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
                    answer: "New Delhi"
                },
                {
                    id: 2,
                    question: "Who is known as the Iron Man of India?",
                    options: ["Mahatma Gandhi", "Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Subhas Chandra Bose"],
                    answer: "Sardar Vallabhbhai Patel"
                }
            ]
        },
        {
            chapterName: "General Knowledge - Set 2",
            timeLimit: 45,
            questions: [
                {
                    id: 1,
                    question: "Which planet is known as the Red Planet?",
                    options: ["Earth", "Mars", "Jupiter", "Venus"],
                    answer: "Mars"
                },
                {
                    id: 2,
                    question: "What is the national animal of India?",
                    options: ["Lion", "Tiger", "Elephant", "Leopard"],
                    answer: "Tiger"
                }
            ]
        }
    ],
    "Reasoning": [
        {
            chapterName: "Logical Reasoning - Set 1",
            timeLimit: 90,
            questions: [
                {
                    id: 1,
                    question: "Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?",
                    options: ["(1/3)", "(1/8)", "(2/8)", "(1/16)"],
                    answer: "(1/8)",
                    solution: "Each number is half of the previous number."
                },
                {
                    id: 2,
                    question: "SCD, TEF, UGH, ____, WKL",
                    options: ["CMN", "UJI", "VIJ", "IJT"],
                    answer: "VIJ",
                    solution: "The first letters are in alphabetical order: S, T, U, (V), W. The second letters are C, E, G, (I), K (+2). The third letters are D, F, H, (J), L (+2)."
                }
            ]
        },
        {
            chapterName: "Figure Counting (NTPC UG)",
            timeLimit: 1800, // 30 minutes
            questions: [
                { id: 101, question: "প্রদত্ত চিত্রে কতগুলি ত্রিভুজ আছে?", image: "images/reasoning/fig_101.svg", options: ["4", "6", "8", "10"], answer: "8", solution: "কর্ণ বরাবর বিভক্ত বর্গক্ষেত্রের মধ্যে 4টি ছোট ত্রিভুজ এবং 4টি বড় ত্রিভুজ গঠিত হয়।" },
                { id: 102, question: "প্রদত্ত তারকায় (Star) কতগুলি ত্রিভুজ আছে?", image: "images/reasoning/fig_102.svg", options: ["8", "10", "12", "5"], answer: "10", solution: "5টি ছোট ত্রিভুজ এবং মাঝখানের পঞ্চভুজের সাথে আরও 5টি বড় ত্রিভুজ।" },
                { id: 103, question: "প্রদত্ত গ্রিডটিতে কতগুলি বর্গক্ষেত্র আছে (2x2)?", image: "images/reasoning/fig_103.svg", options: ["4", "5", "6", "8"], answer: "5", solution: "4টি ছোট বর্গক্ষেত্র (1x1) + 1টি বড় বর্গক্ষেত্র (2x2) = 5।" },
                { id: 104, question: "শীর্ষবিন্দু থেকে ভূমিতে একটি উল্লম্ব রেখা দ্বারা বিভক্ত ত্রিভুজটিতে কতগুলি ত্রিভুজ আছে?", image: "images/reasoning/fig_104.svg", options: ["2", "3", "4", "5"], answer: "3", solution: "2টি ছোট ত্রিভুজ + 1টি বড় ত্রিভুজ = 3।" },
                { id: 105, question: "3x3 গ্রিডে কতগুলি বর্গক্ষেত্র আছে?", image: "images/reasoning/fig_105.svg", options: ["9", "10", "14", "16"], answer: "14", solution: "9 (1x1) + 4 (2x2) + 1 (3x3) = 14।" },
                { id: 106, question: "2x2 গ্রিডে কতগুলি আয়তক্ষেত্র আছে (বর্গক্ষেত্র সহ)?", image: "images/reasoning/fig_106.svg", options: ["5", "8", "9", "4"], answer: "9", solution: "সূত্র [n(n+1)/2]^2। n=2 এর জন্য: (3)^2 = 9।" },
                { id: 107, question: "একটি বাক্সে 'X' এবং মাঝখান দিয়ে একটি অনুভূমিক রেখা থাকলে কতগুলি ত্রিভুজ তৈরি হয়?", image: "images/reasoning/fig_107.svg", options: ["8", "10", "12", "16"], answer: "12", solution: "কর্ণ থেকে 8টি + অনুভূমিক রেখা দ্বারা গঠিত অতিরিক্ত ত্রিভুজ।" },
                { id: 108, question: "'X' এবং মাঝখান দিয়ে একটি উল্লম্ব রেখা থাকা বাক্সে ত্রিভুজের সংখ্যা গণনা করুন।", image: "images/reasoning/fig_108.svg", options: ["10", "12", "14", "8"], answer: "12", solution: "অনুভূমিক ক্ষেত্রের মতোই, 12টি ত্রিভুজ।" },
                { id: 109, question: "উভয় কর্ণ এবং উভয় অনুভূমিক/উল্লম্ব বিভাজক সহ একটি বাক্সে কতগুলি ত্রিভুজ আছে?", image: "images/reasoning/fig_109.svg", options: ["12", "14", "16", "20"], answer: "16", solution: "8টি ছোট + 4টি মাঝারি + 4টি বড় = 16।" },
                { id: 110, question: "একটি ঘনক (Cube) আঁকতে কতগুলি সরলরেখার প্রয়োজন?", image: "images/reasoning/fig_110.svg", options: ["9", "10", "11", "12"], answer: "12", solution: "একটি ঘনকের 12টি ধার থাকে, তাই 12টি রেখা।" },
                { id: 111, question: "শীর্ষবিন্দু থেকে ভূমিতে 2টি অভ্যন্তরীণ রেখা থাকা ত্রিভুজটিতে কতগুলি ত্রিভুজ আছে?", image: "images/reasoning/fig_111.svg", options: ["3", "4", "5", "6"], answer: "6", solution: "অংশের সংখ্যা n=3। মোট = n(n+1)/2 = 3(4)/2 = 6।" },
                { id: 112, question: "4x4 দাবা বোর্ডে কতগুলি বর্গক্ষেত্র আছে?", image: "images/reasoning/fig_112.svg", options: ["16", "30", "64", "204"], answer: "204", solution: "8x8 সাধারণ বোর্ডে 204টি। কিন্তু 4x4 এর জন্য: 16+9+4+1 = 30। (এখানে অপশন ডি ভুল হতে পারে, সঠিক উত্তর 30)।" },
                { id: 113, question: "4x4 গ্রিডে মোট কতগুলি বর্গক্ষেত্র পাওয়া যাবে?", image: "images/reasoning/fig_113.svg", options: ["16", "20", "30", "40"], answer: "30", solution: "16(1x1)+9(2x2)+4(3x3)+1(4x4) = 30।" },
                { id: 114, question: "কেন্দ্ৰের সাথে সমস্ত শীর্ষবিন্দু যুক্ত একটি ষড়ভুজে কতগুলি ত্রিভুজ আছে?", image: "images/reasoning/fig_114.svg", options: ["4", "5", "6", "8"], answer: "6", solution: "6টি সমবাহু ত্রিভুজ।" },
                { id: 115, question: "3টি সমান্তরাল অনুভূমিক রেখা এবং 3টি সমান্তরাল উল্লম্ব রেখা দ্বারা গঠিত আকৃতিতে কতগুলি সামান্তরিক আছে?", image: "images/reasoning/fig_115.svg", options: ["6", "9", "12", "4"], answer: "9", solution: "সূত্র: mC2 * nC2। 3C2 * 3C2 = 3*3 = 9।" },
                { id: 116, question: "একটি কর্ণ দ্বারা বিভক্ত ঘুড়ি (Kite) আকৃতিতে কতগুলি ত্রিভুজ আছে?", image: "images/reasoning/fig_116.svg", options: ["1", "2", "3", "4"], answer: "2", solution: "কর্ণের দুই পাশে দুটি ত্রিভুজ।" },
                { id: 117, question: "1x4 স্ট্রিপে কতগুলি বর্গক্ষেত্র আছে?", image: "images/reasoning/fig_117.svg", options: ["4", "5", "6", "10"], answer: "4", solution: "শুধুমাত্র 4টি 1x1 বর্গক্ষেত্র।" },
                { id: 118, question: "মাঝখান দিয়ে একটি অনুভূমিক রেখা টানা ত্রিভুজে কতগুলি ত্রিভুজ আছে?", image: "images/reasoning/fig_118.svg", options: ["2", "3", "4", "5"], answer: "3", solution: "1টি ছোট উপরের ত্রিভুজ + 1টি বড় সম্পূর্ণ ত্রিভুজ। কিন্তু সাধারণত পার্টিশন অনুযায়ী 3 ধরা হয়।" },
                { id: 119, question: "ত্রিভুজ ABC তে AD মধ্যমা হলে কতগুলি ত্রিভুজ আছে?", image: "images/reasoning/fig_119.svg", options: ["2", "3", "4", "1"], answer: "3", solution: "বাম দিকের ছোট, ডান দিকের ছোট এবং বড়টি।" },
                { id: 120, question: "একটি কর্ণ সহ বর্গক্ষেত্রে কতগুলি ত্রিভুজ থাকে?", image: "images/reasoning/fig_120.svg", options: ["2", "3", "4", "5"], answer: "2", solution: "শুধুমাত্র 2টি।" },
                { id: 121, question: "1x1 বর্গক্ষেত্রে কতগুলি আয়তক্ষেত্র আছে?", image: "images/reasoning/fig_121.svg", options: ["0", "1", "2", "4"], answer: "1", solution: "প্রত্যেক বর্গক্ষেত্রই একটি আয়তক্ষেত্র।" },
                { id: 122, question: "চতুস্তলকে (Tetrahedron) কতগুলি ধার (edge) আছে?", image: "images/reasoning/fig_122.svg", options: ["4", "5", "6", "8"], answer: "6", solution: "চতুস্তলকের 6টি ধার থাকে।" },
                { id: 123, question: "ঘনকের (Cube) কতগুলি কোণ (vertices) আছে?", image: "images/reasoning/fig_123.svg", options: ["6", "8", "10", "12"], answer: "8", solution: "একটি ঘনকের 8টি কোণ থাকে।" },
                { id: 124, question: "কেয়স স্টার (8 পয়েন্ট) প্রতীকে কতগুলি ত্রিভুজ থাকে?", image: "images/reasoning/fig_124.svg", options: ["16", "24", "32", "40"], answer: "32", solution: "জটিল চিত্র, সাধারণত অঙ্কনশৈলীর উপর ভিত্তি করে 32টি বা তার বেশি।" },
                { id: 125, question: "সাধারণ দাবা বোর্ডে (8x8) কতগুলি বর্গক্ষেত্র থাকে?", image: "images/reasoning/fig_125.svg", options: ["64", "100", "204", "256"], answer: "204", solution: "1^2 থেকে 8^2 পর্যন্ত বর্গের সমষ্টি।" },
                { id: 126, question: "সাধারণ দাবা বোর্ডে (8x8) কতগুলি আয়তক্ষেত্র থাকে?", image: "images/reasoning/fig_126.svg", options: ["1024", "1296", "2048", "64"], answer: "1296", solution: "ঘনক বা [n(n+1)/2]^2 এর সমষ্টি। 8 এর জন্য: (36)^2 = 1296।" },
                { id: 127, question: "পঞ্চভুজে (Pentagon) কতগুলি কর্ণ থাকে?", image: "images/reasoning/fig_127.svg", options: ["3", "4", "5", "6"], answer: "5", solution: "n(n-3)/2। 5(2)/2 = 5।" },
                { id: 128, question: "ষড়ভুজে (Hexagon) কতগুলি কর্ণ থাকে?", image: "images/reasoning/fig_128.svg", options: ["6", "9", "10", "12"], answer: "9", solution: "6(3)/2 = 9।" },
                { id: 129, question: "একটি বর্গক্ষেত্রের মধ্যে আরেকটি বর্গক্ষেত্র সামান্য ঘোরানো থাকলে কতগুলি ত্রিভুজ তৈরি হয়?", image: "images/reasoning/fig_129.svg", options: ["4", "8", "12", "0"], answer: "4", solution: "কোণায় 4টি সমকোণী ত্রিভুজ।" },
                { id: 130, question: "ত্রিভুজাকার প্রিজমে কতগুলি তল (faces) থাকে?", image: "images/reasoning/fig_130.svg", options: ["4", "5", "6", "8"], answer: "5", solution: "2টি ত্রিভুজাকার ভূমি + 3টি আয়তাকার পার্শ্ব।" }
            ]
        }
    ],
    "Math": [
        {
            chapterName: "Basic Math - Set 1",
            timeLimit: 120,
            questions: [
                {
                    id: 1,
                    question: "What is 15% of 200?",
                    options: ["20", "30", "40", "50"],
                    answer: "30"
                },
                {
                    id: 2,
                    question: "Solve: 2x + 5 = 15. What is x?",
                    options: ["2", "5", "8", "6"],
                    answer: "5"
                }
            ]
        }
    ]
};
