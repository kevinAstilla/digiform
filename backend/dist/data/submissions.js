"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submissions = [
    {
        id: "1",
        form_id: '3',
        created_at: '2024-12-01T08:00:00Z',
        submitted_at: '2024-12-01T08:00:00Z',
        data: {
            features: ['Design'],
            satisfaction: 'Satisfied',
            suggestions: 'yes'
        }
    },
    {
        id: "2",
        form_id: '3',
        created_at: '2024-12-01T08:00:00Z',
        submitted_at: '2024-12-01T08:00:00Z',
        data: {
            features: ['Design', 'Performance'],
            satisfaction: 'Satisfied',
            suggestions: 'no'
        }
    },
    {
        id: "3",
        form_id: '3',
        created_at: '2025-02-11T19:13:35.266Z',
        submitted_at: '2025-02-11T19:13:35.266Z',
        data: {
            features: ['Ease of Use', 'Performance', 'Design'],
            satisfaction: 'Satisfied',
            suggestions: 'make the padding bigger'
        }
    },
    {
        id: "4",
        form_id: '3',
        created_at: '2025-02-11T19:13:35.266Z',
        submitted_at: '2025-02-11T19:13:35.266Z',
        data: {
            features: ['Ease of Use', 'Performance', 'Design'],
            satisfaction: 'Satisfied',
            suggestions: 'make the padding bigger'
        }
    },
    {
        id: "5",
        form_id: '3',
        created_at: '2025-02-11T19:13:35.266Z',
        submitted_at: '2025-02-11T19:13:35.266Z',
        data: {
            features: ['Ease of Use', 'Performance', 'Design'],
            satisfaction: 'Satisfied',
            suggestions: 'make the padding bigger'
        }
    },
    {
        id: "6",
        form_id: '3',
        created_at: '2025-02-11T19:13:35.266Z',
        submitted_at: '2025-02-11T19:13:35.266Z',
        data: {
            features: ['Ease of Use', 'Performance', 'Design'],
            satisfaction: 'Satisfied',
            suggestions: 'make the padding bigger'
        }
    },
    {
        id: "7",
        form_id: "3",
        created_at: "2024-12-02T16:00:00Z",
        submitted_at: "2024-12-02T17:36:00Z",
        data: {
            features: [
                "Performance",
                "Ease of Use",
                "Design"
            ],
            satisfaction: "Neutral",
            suggestions: "Better error messages"
        }
    },
    {
        id: "8",
        form_id: "3",
        created_at: "2024-12-27T00:00:00Z",
        submitted_at: "2024-12-27T01:13:00Z",
        data: {
            features: [
                "Performance",
                "Ease of Use"
            ],
            satisfaction: "Dissatisfied",
            suggestions: "Improve loading speed"
        }
    },
    {
        id: "9",
        form_id: "3",
        created_at: "2024-12-15T05:00:00Z",
        submitted_at: "2024-12-15T05:17:00Z",
        data: {
            features: [
                "Ease of Use",
                "Support",
                "Design"
            ],
            satisfaction: "Satisfied",
            suggestions: "Better performance on older devices"
        }
    },
    {
        id: "10",
        form_id: "3",
        created_at: "2024-12-16T22:00:00Z",
        submitted_at: "2024-12-16T22:38:00Z",
        data: {
            features: [
                "Ease of Use"
            ],
            satisfaction: "Very Satisfied",
            suggestions: "Enhance search functionality"
        }
    },
    {
        id: "11",
        form_id: "3",
        created_at: "2024-12-07T18:00:00Z",
        submitted_at: "2024-12-07T19:06:00Z",
        data: {
            features: [
                "Design",
                "Performance",
                "Ease of Use"
            ],
            satisfaction: "Satisfied",
            suggestions: "More integrations with third-party apps"
        }
    },
    {
        id: "12",
        form_id: "3",
        created_at: "2024-12-22T10:00:00Z",
        submitted_at: "2024-12-22T11:34:00Z",
        data: {
            features: [
                "Performance"
            ],
            satisfaction: "Neutral",
            suggestions: "Provide more documentation"
        }
    },
    {
        id: "13",
        form_id: "3",
        created_at: "2024-12-25T08:00:00Z",
        submitted_at: "2024-12-25T09:01:00Z",
        data: {
            features: [
                "Support"
            ],
            satisfaction: "Dissatisfied",
            suggestions: "Enhance search functionality"
        }
    },
    {
        id: "14",
        form_id: "3",
        created_at: "2024-12-10T19:00:00Z",
        submitted_at: "2024-12-10T20:57:00Z",
        data: {
            features: [
                "Performance",
                "Support"
            ],
            satisfaction: "Neutral",
            suggestions: "Fix minor bugs"
        }
    },
    {
        id: "15",
        form_id: "3",
        created_at: "2024-12-21T08:00:00Z",
        submitted_at: "2024-12-21T09:20:00Z",
        data: {
            features: [
                "Design",
                "Support"
            ],
            satisfaction: "Satisfied",
            suggestions: "Better performance on older devices"
        }
    },
    {
        id: "16",
        form_id: "3",
        created_at: "2024-12-30T01:00:00Z",
        submitted_at: "2024-12-30T01:47:00Z",
        data: {
            features: [
                "Support",
                "Ease of Use",
                "Performance"
            ],
            satisfaction: "Dissatisfied",
            suggestions: "Simplify navigation"
        }
    },
    {
        id: "17",
        form_id: "3",
        created_at: "2024-12-30T01:00:00Z",
        submitted_at: "2024-12-30T01:31:00Z",
        data: {
            features: [
                "Design"
            ],
            satisfaction: "Dissatisfied",
            suggestions: "More frequent updates"
        }
    },
    {
        id: "18",
        form_id: "3",
        created_at: "2024-12-30T01:00:00Z",
        submitted_at: "2024-12-30T01:46:00Z",
        data: {
            features: [
                "Support"
            ],
            satisfaction: "Satisfied",
            suggestions: "Enhance search functionality"
        }
    },
    {
        id: "19",
        form_id: "3",
        created_at: "2024-12-24T09:00:00Z",
        submitted_at: "2024-12-24T10:21:00Z",
        data: {
            features: [
                "Support"
            ],
            satisfaction: "Dissatisfied",
            suggestions: "Improve customer support"
        }
    },
    {
        id: "20",
        form_id: "3",
        created_at: "2024-12-02T17:00:00Z",
        submitted_at: "2024-12-02T17:07:00Z",
        data: {
            features: [
                "Design",
                "Support"
            ],
            satisfaction: "Satisfied",
            suggestions: "Make mobile-friendly"
        }
    },
    {
        id: "21",
        form_id: "3",
        created_at: "2024-12-12T14:00:00Z",
        submitted_at: "2024-12-12T15:54:00Z",
        data: {
            features: [
                "Performance"
            ],
            satisfaction: "Satisfied",
            suggestions: "More intuitive UI"
        }
    },
    {
        id: "22",
        form_id: "3",
        created_at: "2024-12-04T02:00:00Z",
        submitted_at: "2024-12-04T02:26:00Z",
        data: {
            features: [
                "Support"
            ],
            satisfaction: "Neutral",
            suggestions: "Better color contrast"
        }
    },
    {
        id: "23",
        form_id: "3",
        created_at: "2024-12-03T06:00:00Z",
        submitted_at: "2024-12-03T07:14:00Z",
        data: {
            features: [
                "Support"
            ],
            satisfaction: "Very Satisfied",
            suggestions: "Reduce unnecessary animations"
        }
    },
    {
        id: "24",
        form_id: "3",
        created_at: "2024-12-22T01:00:00Z",
        submitted_at: "2024-12-22T01:37:00Z",
        data: {
            features: [
                "Performance",
                "Design"
            ],
            satisfaction: "Very Satisfied",
            suggestions: "Fix minor bugs"
        }
    },
    {
        id: "25",
        form_id: "3",
        created_at: "2024-12-27T15:00:00Z",
        submitted_at: "2024-12-27T16:58:00Z",
        data: {
            features: [
                "Ease of Use",
                "Design",
                "Performance"
            ],
            satisfaction: "Very Satisfied",
            suggestions: "Enhance security features"
        }
    },
    {
        id: "26",
        form_id: "3",
        created_at: "2024-12-08T14:00:00Z",
        submitted_at: "2024-12-08T14:13:00Z",
        data: {
            features: [
                "Design",
                "Performance",
                "Support"
            ],
            satisfaction: "Very Satisfied",
            suggestions: "More customization options"
        }
    },
    {
        id: "27",
        form_id: "3",
        created_at: "2024-12-05T08:00:00Z",
        submitted_at: "2024-12-05T09:24:00Z",
        data: {
            features: [
                "Performance",
                "Ease of Use",
                "Support"
            ],
            satisfaction: "Very Satisfied",
            suggestions: "Reduce unnecessary animations"
        }
    },
    {
        id: "28",
        form_id: "3",
        created_at: "2024-12-28T22:00:00Z",
        submitted_at: "2024-12-28T23:01:00Z",
        data: {
            features: [
                "Performance",
                "Support",
                "Ease of Use",
                "Design"
            ],
            satisfaction: "Neutral",
            suggestions: "Better performance on older devices"
        }
    },
    {
        id: "29",
        form_id: "3",
        created_at: "2024-12-18T02:00:00Z",
        submitted_at: "2024-12-18T02:46:00Z",
        data: {
            features: [
                "Design",
                "Performance"
            ],
            satisfaction: "Very Satisfied",
            suggestions: "More frequent updates"
        }
    },
    {
        id: "30",
        form_id: "3",
        created_at: "2024-12-02T15:00:00Z",
        submitted_at: "2024-12-02T16:44:00Z",
        data: {
            features: [
                "Ease of Use",
                "Performance",
                "Support",
                "Design"
            ],
            satisfaction: "Satisfied",
            suggestions: "Make mobile-friendly"
        }
    },
    {
        id: "31",
        form_id: "3",
        created_at: "2024-12-04T05:00:00Z",
        submitted_at: "2024-12-04T05:36:00Z",
        data: {
            features: [
                "Design",
                "Support",
                "Ease of Use",
                "Performance"
            ],
            satisfaction: "Satisfied",
            suggestions: "More customization options"
        }
    },
    {
        id: "32",
        form_id: "3",
        created_at: "2024-12-31T12:00:00Z",
        submitted_at: "2024-12-31T13:32:00Z",
        data: {
            features: [
                "Performance",
                "Support",
                "Design"
            ],
            satisfaction: "Very Satisfied",
            suggestions: "Better performance on older devices"
        }
    },
    {
        id: "33",
        form_id: "3",
        created_at: "2024-12-06T09:00:00Z",
        submitted_at: "2024-12-06T10:47:00Z",
        data: {
            features: [
                "Performance",
                "Support",
                "Design",
                "Ease of Use"
            ],
            satisfaction: "Dissatisfied",
            suggestions: "Reduce unnecessary notifications"
        }
    },
    {
        id: "34",
        form_id: "3",
        created_at: "2024-12-23T18:00:00Z",
        submitted_at: "2024-12-23T18:35:00Z",
        data: {
            features: [
                "Support",
                "Ease of Use"
            ],
            satisfaction: "Satisfied",
            suggestions: "Better color contrast"
        }
    },
    {
        id: "35",
        form_id: "3",
        created_at: "2024-12-19T04:00:00Z",
        submitted_at: "2024-12-19T05:51:00Z",
        data: {
            features: [
                "Design",
                "Support",
                "Performance"
            ],
            satisfaction: "Satisfied",
            suggestions: "Improve loading speed"
        }
    },
    {
        id: "36",
        form_id: "3",
        created_at: "2024-12-22T12:00:00Z",
        submitted_at: "2024-12-22T13:04:00Z",
        data: {
            features: [
                "Support",
                "Design",
                "Ease of Use"
            ],
            satisfaction: "Dissatisfied",
            suggestions: "Increase font size"
        }
    }
];
exports.default = submissions;
//# sourceMappingURL=submissions.js.map