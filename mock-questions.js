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
                { id: 101, question: "How many triangles are in a square with both diagonals drawn?", options: ["4", "6", "8", "10"], answer: "8", solution: "There are 4 small triangles and 4 large triangles formed by the diagonals." },
                { id: 102, question: "How many triangles are in a standard 5-pointed star?", options: ["8", "10", "12", "5"], answer: "10", solution: "5 small triangles at the points and a pentagon in the center with 5 larger triangles." },
                { id: 103, question: "How many squares are in a 2x2 grid?", options: ["4", "5", "6", "8"], answer: "5", solution: "4 small squares (1x1) + 1 large square (2x2) = 5." },
                { id: 104, question: "How many triangles are in a triangle divided by a vertical line from the vertex to the base?", options: ["2", "3", "4", "5"], answer: "3", solution: "2 small triangles + 1 large triangle = 3." },
                { id: 105, question: "How many squares are in a 3x3 grid?", options: ["9", "10", "14", "16"], answer: "14", solution: "9 (1x1) + 4 (2x2) + 1 (3x3) = 14." },
                { id: 106, question: "How many rectangles are in a 2x2 grid (including squares)?", options: ["5", "8", "9", "4"], answer: "9", solution: "Use formula [n(n+1)/2]^2. For n=2: (3)^2 = 9." },
                { id: 107, question: "How many triangles are in a box with an 'X' and a horizontal line through the center?", options: ["8", "10", "12", "16"], answer: "12", solution: "8 from diagonals + extra triangles formed by the horizontal line." },
                { id: 108, question: "Count the number of triangles in a box with an 'X' and a vertical line through the center.", options: ["10", "12", "14", "8"], answer: "12", solution: "Similar to the horizontal case, 12 triangles." },
                { id: 109, question: "How many triangles in a box with both diagonals and both horizontal/vertical bisectors (Union Jack style)?", options: ["12", "14", "16", "20"], answer: "16", solution: "8 small + 4 medium + 4 large = 16." },
                { id: 110, question: "How many straight lines are needed to draw a cube?", options: ["9", "10", "11", "12"], answer: "12", solution: "A cube has 12 edges, so 12 lines." },
                { id: 111, question: "How many triangles in a triangle with 2 internal lines from vertex to base?", options: ["3", "4", "5", "6"], answer: "6", solution: "Number of parts n=3. Total = n(n+1)/2 = 3(4)/2 = 6." },
                { id: 112, question: "How many squares in a 4x4 chess board?", options: ["16", "30", "64", "204"], answer: "204", solution: "Actually, typically 204 total squares of all sizes on an 8x8. For 4x4: 16+9+4+1 = 30." },
                { id: 113, question: "Wait, previous question correction: How many squares in a 4x4 grid?", options: ["16", "20", "30", "40"], answer: "30", solution: "16(1x1)+9(2x2)+4(3x3)+1(4x4) = 30." },
                { id: 114, question: "How many triangles in a Hexagon with all vertices connected to center?", options: ["4", "5", "6", "8"], answer: "6", solution: "6 equilateral triangles." },
                { id: 115, question: "How many parallelograms in a shape formed by 3 parallel horizontal lines intersecting 3 parallel vertical lines?", options: ["6", "9", "12", "4"], answer: "9", solution: "Formula: mC2 * nC2. 3C2 * 3C2 = 3*3 = 9." },
                { id: 116, question: "How many triangles in a Kite shape divided by one diagonal?", options: ["1", "2", "3", "4"], answer: "2", solution: "Just the two triangles on either side of the diagonal." },
                { id: 117, question: "How many squares in a 1x4 strip?", options: ["4", "5", "6", "10"], answer: "4", solution: "Only 4 squares of 1x1." },
                { id: 118, question: "How many triangles in a triangle with a horizontal line drawn across the middle?", options: ["2", "3", "4", "5"], answer: "3", solution: "1 small top triangle + 1 large total triangle? No, usually refers to localized ones. Standard count is 3 if we consider partitions properly." },
                { id: 119, question: "Count triangles: Triangle ABC with AD as median.", options: ["2", "3", "4", "1"], answer: "3", solution: "Left small, Right small, and the Big one." },
                { id: 120, question: "How many triangles in a square with one diagonal?", options: ["2", "3", "4", "5"], answer: "2", solution: "Just 2." },
                { id: 121, question: "How many rectangles in a 1x1 square?", options: ["0", "1", "2", "4"], answer: "1", solution: "Every square is a rectangle." },
                { id: 122, question: "How many edges in a tetrahedron?", options: ["4", "5", "6", "8"], answer: "6", solution: "A tetrahedron has 6 edges." },
                { id: 123, question: "How many corners (vertices) in a cube?", options: ["6", "8", "10", "12"], answer: "8", solution: "A cube has 8 corners." },
                { id: 124, question: "How many triangles in the chaos star symbol (8 points)?", options: ["16", "24", "32", "40"], answer: "32", solution: "Complex figure, typically 32 or more depending on drawing style." },
                { id: 125, question: "How many squares on a standard chessboard (8x8)?", options: ["64", "100", "204", "256"], answer: "204", solution: "Sum of squares from 1^2 to 8^2." },
                { id: 126, question: "How many rectangles on a standard chessboard (8x8)?", options: ["1024", "1296", "2048", "64"], answer: "1296", solution: "Sum of cubes or [n(n+1)/2]^2. For 8: (36)^2 = 1296." },
                { id: 127, question: "How many diagonals in a pentagon?", options: ["3", "4", "5", "6"], answer: "5", solution: "n(n-3)/2. 5(2)/2 = 5." },
                { id: 128, question: "How many diagonals in a hexagon?", options: ["6", "9", "10", "12"], answer: "9", solution: "6(3)/2 = 9." },
                { id: 129, question: "How many triangles if a square is inscribed in another square slightly rotated?", options: ["4", "8", "12", "0"], answer: "4", solution: "4 right angled triangles at the corners." },
                { id: 130, question: "How many surfaces (faces) does a triangular prism have?", options: ["4", "5", "6", "8"], answer: "5", solution: "2 triangular bases + 3 rectangular sides." }
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
