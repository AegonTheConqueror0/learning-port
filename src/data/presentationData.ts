import { SlideCard } from '../types/presentation';
import { THEORIST_IMAGES } from './assets';

export const SLIDES_DATA: SlideCard[] = [
  // SLIDE 1 (PDF Page 1): Title
  {
    id: 'slide-1',
    slideNumber: 1,
    theoristId: 'intro',
    sectionTitle: 'Behavioral Learning Theory',
    cardTitle: 'Behavioral Learning Theory or Association',
    category: 'Title',
    content: {
      type: 'intro',
      data: {
        title: 'BEHAVIORAL LEARNING THEORY OR ASSOCIATION',
        subtitle: 'Digital Portfolio Presentation · Group 3',
        description: 'An educational examination of the four foundational cornerstones of associative and behavioral learning psychology: Edward Thorndike, B.F. Skinner, Ivan Pavlov, and Albert Bandura.',
        theorists: [
          {
            name: 'Edward Lee Thorndike',
            dates: '1874 – 1949',
            theory: 'Connectionism',
            keyConcept: 'Trial and error learning and the strengthening of S-R connections through practice.',
            image: THEORIST_IMAGES.thorndike,
          },
          {
            name: 'B.F. Skinner',
            dates: '1904 – 1990',
            theory: 'Operant Conditioning',
            keyConcept: 'Behavior is shaped and sustained by its consequences (reinforcement & punishment).',
            image: THEORIST_IMAGES.skinner,
          },
          {
            name: 'Ivan Pavlov',
            dates: '1849 – 1936',
            theory: 'Classical Conditioning',
            keyConcept: 'Organisms learn to associate previously neutral stimuli with involuntary biological reflexes.',
            image: THEORIST_IMAGES.pavlov,
          },
          {
            name: 'Albert Bandura',
            dates: '1925 – 2021',
            theory: 'Social Learning Theory',
            keyConcept: 'Learning occurs by observing, modeling, and imitating behaviors, attitudes, and emotional reactions.',
            image: THEORIST_IMAGES.bandura,
          },
        ],
      },
    },
  },

  // SLIDE 2 (PDF Page 2): Connectionism
  {
    id: 'slide-2',
    slideNumber: 2,
    theoristId: 'thorndike',
    sectionTitle: 'Connectionism',
    cardTitle: 'CONNECTIONISM',
    category: 'Thorndike',
    content: {
      type: 'quote_hero',
      data: {
        title: 'CONNECTIONISM',
        author: 'Edward Lee Thorndike',
        role: 'American Psychologist · Pioneer of Educational Psychology',
        quote: 'Learning is the strengthening of connections between situations and responses through experience.',
        subQuote: 'Stimulus-Response (S-R) framework established the experimental foundation for behavioral psychology.',
        image: THEORIST_IMAGES.thorndike,
      },
    },
  },

  // SLIDE 3 (PDF Page 3): Edward Lee Thorndike Biography
  {
    id: 'slide-3',
    slideNumber: 3,
    theoristId: 'thorndike',
    sectionTitle: 'Biography',
    cardTitle: 'Edward Lee Thorndike',
    category: 'Thorndike',
    content: {
      type: 'theorist_profile',
      data: {
        name: 'Edward Lee Thorndike',
        birth: 'Born on August 31, 1874',
        image: THEORIST_IMAGES.thorndike,
        milestones: [
          'Earned his bachelor\'s degree from Wesleyan University in 1895.',
          'Earned his master\'s degree from Harvard University in 1897.',
          'Completed his Ph.D. at Columbia University in 1898.',
        ],
      },
    },
  },

  // SLIDE 4 (PDF Page 4): Thorndike's Major Contribution
  {
    id: 'slide-4',
    slideNumber: 4,
    theoristId: 'thorndike',
    sectionTitle: 'Major Contribution',
    cardTitle: "THORNDIKE'S MAJOR CONTRIBUTION",
    category: 'Thorndike',
    content: {
      type: 'major_contribution_title',
      data: {
        title: "THORNDIKE'S MAJOR CONTRIBUTION",
        author: 'Edward Lee Thorndike',
        summary: 'Pioneered experimental educational psychology and developed the foundational principles of how stimulus-response bonds form and strengthen through experience.',
        image: THEORIST_IMAGES.stimulusResponse,
        portrait: THEORIST_IMAGES.thorndike,
      },
    },
  },

  // SLIDE 5 (PDF Page 5): 1. Connectionism Theory
  {
    id: 'slide-5',
    slideNumber: 5,
    theoristId: 'thorndike',
    sectionTitle: 'Core Theory',
    cardTitle: '1. Connectionism Theory',
    category: 'Thorndike',
    content: {
      type: 'connectionism_theory',
      data: {
        title: '1. Connectionism Theory',
        subtitle: 'The Stimulus-Response (S-R) Bond',
        bullets: [
          'Learning is the process of forming a mental link, or "bond," between a stimulus and a response.',
          'Learning develops through experience and repeated practice.',
        ],
        image: THEORIST_IMAGES.stimulusResponse,
      },
    },
  },

  // SLIDE 6 (PDF Page 6): Trial and Error Learning Theory (Cats in Puzzle Box)
  {
    id: 'slide-6',
    slideNumber: 6,
    theoristId: 'thorndike',
    sectionTitle: 'Empirical Research',
    cardTitle: 'TRIAL AND ERROR LEARNING THEORY',
    category: 'Thorndike',
    scrollHighlight: true,
    content: {
      type: 'puzzle_box_findings',
      data: {
        title: 'TRIAL AND ERROR LEARNING THEORY',
        bullets: [
          'Conducted puzzle-box experiments with cats',
          'Learning occurred gradually through repeated attempts',
          'Cats tried different responses to escape',
          'Successful responses were strengthened through practice',
          'Escape became faster and more efficient over repeated trials',
        ],
        image: THEORIST_IMAGES.catPuzzleBox,
      },
    },
  },

  // SLIDE 7 (PDF Page 7): Trial and Error 4-Step Diagram
  {
    id: 'slide-7',
    slideNumber: 7,
    theoristId: 'thorndike',
    sectionTitle: 'Learning Process',
    cardTitle: 'TRIAL AND ERROR LEARNING THEORY',
    category: 'Thorndike',
    scrollHighlight: true,
    content: {
      type: 'trial_error_diagram',
      data: {
        title: 'TRIAL AND ERROR LEARNING THEORY',
        subtitle: "Edward Thorndike's theory explains how learning occurs through a process of trial and error.",
        image: THEORIST_IMAGES.catPuzzleBox,
        steps: [
          { name: 'TRIAL AND ERROR', text: 'The learner makes random responses in attempts to solve a problem' },
          { name: 'ACCIDENTAL SUCCESS', text: 'After various unsuccessful behaviors, the learner performs the correct response by chance' },
          { name: 'REWARD', text: 'The correct response is followed by a satisfying state of affairs (e.g. food)' },
          { name: 'LEARNING', text: 'Over repeated trials, the correct response is strengthened and occurs more frequently' },
        ],
      },
    },
  },

  // SLIDE 8 (PDF Page 8): Thorndike's Theory of Learning - 3 Laws
  {
    id: 'slide-8',
    slideNumber: 8,
    theoristId: 'thorndike',
    sectionTitle: 'Principles',
    cardTitle: "THORNDIKE'S THEORY OF LEARNING",
    category: 'Thorndike',
    content: {
      type: 'three_laws',
      data: {
        title: "THORNDIKE'S THEORY OF LEARNING",
        image: THEORIST_IMAGES.thorndike,
        laws: [
          {
            title: 'LAW OF READINESS',
            icon: 'bulb',
            bullets: [
              'Learning is more effective when a person is prepared to learn',
              'Readiness facilitates strengthening of connections',
            ],
          },
          {
            title: 'LAW OF EXERCISE',
            icon: 'puzzle',
            bullets: [
              'Practice strengthens learning',
              'Connections are weakened without practice',
            ],
          },
          {
            title: 'LAW OF EFFECT',
            icon: 'brain',
            bullets: [
              'Responses followed by satisfaction are strengthened',
              'Responses followed by discomfort are weakened',
            ],
          },
        ],
      },
    },
  },

  // SLIDE 9 (PDF Page 9): Conclusion (Thorndike)
  {
    id: 'slide-9',
    slideNumber: 9,
    theoristId: 'thorndike',
    sectionTitle: 'Summary',
    cardTitle: 'CONCLUSION',
    category: 'Thorndike',
    content: {
      type: 'thorndike_conclusion',
      data: {
        title: 'CONCLUSION',
        author: 'Edward Lee Thorndike',
        bullets: [
          'Edward Lee Thorndike\'s work showed that learning develops through experience, practice, and consequences.',
          'His ideas became an important foundation for learning theories and educational psychology, influencing how teachers understand and facilitate learning.',
        ],
        image: THEORIST_IMAGES.thorndike,
      },
    },
  },

  // SLIDE 10 (PDF Page 10): B.F. Skinner Hero
  {
    id: 'slide-10',
    slideNumber: 10,
    theoristId: 'skinner',
    sectionTitle: 'Operant Conditioning',
    cardTitle: 'B. F. SKINNER',
    category: 'Skinner',
    content: {
      type: 'skinner_hero',
      data: {
        title: 'B. F. SKINNER',
        subtitle: 'OPERANT CONDITIONING',
        tagline: 'Learning Through Consequences',
        quote: 'The consequences of behavior are the real teachers.',
        subQuote: 'Behavior is influenced by its consequences.',
        biographyLine: 'BURRHUS FREDERIC SKINNER · 1904 – 1990 · AMERICAN PSYCHOLOGIST | BEHAVIORIST | EDUCATOR',
        sideBadge: 'PEOPLE LEARN BEHAVIORS THROUGH CONSEQUENCES',
        imageSkinner: THEORIST_IMAGES.skinner,
        imageApparatus: THEORIST_IMAGES.skinnerBox,
      },
    },
  },

  // SLIDE 11 (PDF Page 11): Who was B.F. Skinner?
  {
    id: 'slide-11',
    slideNumber: 11,
    theoristId: 'skinner',
    sectionTitle: 'Biography Timeline',
    cardTitle: 'WHO WAS B. F. SKINNER?',
    category: 'Skinner',
    scrollHighlight: true,
    content: {
      type: 'skinner_bio',
      data: {
        title: 'WHO WAS B. F. SKINNER?',
        subHeader: 'A LIFE DEDICATED TO UNDERSTANDING BEHAVIOR',
        summary: 'Burrhus Frederic Skinner was an American psychologist, behaviorist, and researcher who studied how behavior is influenced by its consequences. His work greatly contributed to the field of learning, education, and behavior modification.',
        quote: 'The purpose of education is to create people who are capable of doing new things, not simply of repeating what other generations have done.',
        image: THEORIST_IMAGES.skinner,
        timeline: [
          { year: '1904', title: 'BORN', desc: 'March 20, 1904 in Susquehanna, Pennsylvania, USA.' },
          { year: '1926', title: 'EARLY INTERESTS', desc: 'Initially studied English literature and aspired to be a writer.' },
          { year: '1931', title: 'EARNED HIS PhD', desc: 'Received his PhD in psychology from Harvard University.' },
          { year: '1936–1945', title: 'RESEARCH AND TEACHING', desc: 'Conducted influential research on behavior and developed the Skinner box.' },
          { year: '1948', title: 'RETURNED TO HARVARD', desc: 'Became a professor at Harvard University and continued his research and writing.' },
          { year: '1990', title: 'DIED', desc: 'August 18, 1990 at the age of 86.' },
        ],
      },
    },
  },

  // SLIDE 12 (PDF Page 12): Skinner's Big Idea - ABC of Behavior
  {
    id: 'slide-12',
    slideNumber: 12,
    theoristId: 'skinner',
    sectionTitle: 'ABC Model',
    cardTitle: "SKINNER'S BIG IDEA",
    category: 'Skinner',
    scrollHighlight: true,
    content: {
      type: 'skinner_abc_exact',
      data: {
        title: "SKINNER'S BIG IDEA",
        subtitle: 'THE ABC OF BEHAVIOR',
        description: 'Operant conditioning explains how consequences influence the likelihood of behavior occurring again.',
        quote: 'The behavior of an organism is a function of its history of reinforcement.',
        imageSkinner: THEORIST_IMAGES.skinner,
        imageClassroom: THEORIST_IMAGES.classroomTeacher,
        steps: [
          {
            num: 1,
            label: 'BEHAVIOR',
            desc: 'A person does something.',
            good: { title: 'Example (Good Behavior)', text: 'A student answers a question in class.' },
            bad: { title: 'Example (Bad Behavior)', text: 'A student talks during the lesson.' },
          },
          {
            num: 2,
            label: 'CONSEQUENCE',
            desc: 'Something happens after the behavior.',
            good: { title: 'Example (Good Behavior)', text: 'The teacher gives praise. ("Great job!")' },
            bad: { title: 'Example (Bad Behavior)', text: 'The teacher gives a warning. ("Please be quiet.")' },
          },
          {
            num: 3,
            label: 'FUTURE BEHAVIOR',
            desc: 'The behavior is more or less likely to happen again.',
            good: { title: 'Example (Good Behavior)', text: 'The student is more likely to participate again. (More likely to happen again)' },
            bad: { title: 'Example (Bad Behavior)', text: 'The student is less likely to talk during the lesson. (Less likely to happen again)' },
          },
        ],
        footer: 'In operant conditioning, consequences (rewards or punishments) increase or decrease the likelihood that a behavior will occur again.',
        subFooter: 'What we do today shapes what we do tomorrow.',
      },
    },
  },

  // SLIDE 13 (PDF Page 13): The Skinner Box
  {
    id: 'slide-13',
    slideNumber: 13,
    theoristId: 'skinner',
    sectionTitle: 'Laboratory Apparatus',
    cardTitle: 'THE SKINNER BOX',
    category: 'Skinner',
    scrollHighlight: true,
    content: {
      type: 'skinner_box_exact',
      data: {
        title: 'THE SKINNER BOX',
        question: 'How did Skinner study behavior?',
        explanation: 'Skinner used controlled experimental environments to study how consequences affect behavior. The Skinner box allowed him to observe how reinforcement or punishment influences the likelihood of a behavior occurring again.',
        quote1: 'Give a consequence, get a change in behavior.',
        quote2: 'Responses that are reinforced tend to occur more often.',
        whatIsIt: 'A Skinner box is a controlled environment used to study how consequences (rewards or punishments) influence the likelihood of behavior occurring again.',
        keyTakeaway: 'Behavior can be shaped by the consequences that follow it.',
        coreIdea: 'The Skinner box demonstrates the core idea of operant conditioning: consequences influence the likelihood of behavior occurring again.',
        imageSkinner: THEORIST_IMAGES.skinner,
        imageBox: THEORIST_IMAGES.skinnerBox,
        steps: [
          { num: 1, title: 'THE RAT PERFORMS A BEHAVIOR', desc: 'The rat presses the lever (a behavior).' },
          { num: 2, title: 'A CONSEQUENCE IS GIVEN', desc: 'The rat receives a food pellet (a rewarding consequence).' },
          { num: 3, title: 'THE BEHAVIOR INCREASES', desc: 'The rat is more likely to press the lever again in the future.' },
          { num: 4, title: 'LEARNING OCCURS', desc: 'The consequence (in this case, food) increases the likelihood of the behavior happening again.' },
        ],
      },
    },
  },

  // SLIDE 14 (PDF Page 14): Reinforcement
  {
    id: 'slide-14',
    slideNumber: 14,
    theoristId: 'skinner',
    sectionTitle: 'Reinforcement',
    cardTitle: 'REINFORCEMENT',
    category: 'Skinner',
    content: {
      type: 'reinforcement_exact',
      data: {
        title: 'REINFORCEMENT',
        subtitle: 'Increasing a behavior ⬆',
        definition: 'Reinforcement means giving or removing something to make a behavior more likely to happen again.',
        imageSkinner: THEORIST_IMAGES.skinner,
        imageTeacher: THEORIST_IMAGES.classroomTeacher,
        positive: {
          title: 'POSITIVE REINFORCEMENT',
          rule: 'Add something desirable to increase a behavior.',
          step1: 'Student participates.',
          step2: 'Teacher gives praise.',
          step3: 'Student is more likely to participate again.',
        },
        negative: {
          title: 'NEGATIVE REINFORCEMENT',
          rule: 'Remove something unpleasant to increase a behavior.',
          step1: 'Student completes the assignment.',
          step2: 'An extra requirement is removed. (NO EXTRA WORK)',
          step3: 'Student is more likely to complete assignments again.',
        },
        banner: 'Reinforcement, whether by adding something desirable or removing something unpleasant, increases the likelihood of behavior occurring again.',
        note: 'Small changes lead to big results.',
      },
    },
  },

  // SLIDE 15 (PDF Page 15): Punishment
  {
    id: 'slide-15',
    slideNumber: 15,
    theoristId: 'skinner',
    sectionTitle: 'Punishment',
    cardTitle: 'PUNISHMENT',
    category: 'Skinner',
    content: {
      type: 'punishment_exact',
      data: {
        title: 'PUNISHMENT',
        subtitle: 'Decreasing a behavior ⬇',
        definition: 'Punishment means giving or removing something to make a behavior less likely to happen again.',
        quote: 'Consequences shape behavior.',
        imageSkinner: THEORIST_IMAGES.skinner,
        imageClassroom: THEORIST_IMAGES.classroomDesks,
        positive: {
          title: 'POSITIVE PUNISHMENT',
          rule: 'Add something unpleasant to decrease a behavior.',
          step1: 'Student is talking in class.',
          step2: 'Teacher gives a warning.',
        },
        negative: {
          title: 'NEGATIVE PUNISHMENT',
          rule: 'Remove something desirable to decrease a behavior.',
          step1: 'Student does not complete homework.',
          step2: 'Teacher takes away game time.',
        },
        banner: 'Both types of punishment decrease the likelihood of a behavior occurring again.',
        note: 'Guide behavior for a better tomorrow.',
      },
    },
  },

  // SLIDE 16 (PDF Page 16): Other Key Concepts
  {
    id: 'slide-16',
    slideNumber: 16,
    theoristId: 'skinner',
    sectionTitle: 'Key Concepts',
    cardTitle: 'OTHER KEY CONCEPTS',
    category: 'Skinner',
    content: {
      type: 'other_key_concepts',
      data: {
        title: 'OTHER KEY CONCEPTS',
        subtitle: 'Important ideas in operant conditioning',
        quote: 'Behavior is shaped by its consequences.',
        imageSkinner: THEORIST_IMAGES.skinner,
        concepts: [
          { title: 'SHAPING', desc: 'Gradually developing a desired behavior by reinforcing small steps.' },
          { title: 'EXTINCTION', desc: 'A previously reinforced behavior may decrease when reinforcement is no longer provided.' },
          { title: 'REINFORCEMENT SCHEDULES', desc: 'Different patterns can be used to deliver reinforcement.' },
          { title: 'BEHAVIOR', desc: 'Behavior can be influenced by the consequences that follow it.' },
        ],
        footer: 'These key concepts help us understand how behavior can be changed and shaped through its consequences.',
      },
    },
  },

  // SLIDE 17 (PDF Page 17): Application to Education
  {
    id: 'slide-17',
    slideNumber: 17,
    theoristId: 'skinner',
    sectionTitle: 'Classroom Application',
    cardTitle: 'APPLICATION TO EDUCATION',
    category: 'Skinner',
    scrollHighlight: true,
    content: {
      type: 'application_education_skinner',
      data: {
        title: 'APPLICATION TO EDUCATION',
        question: 'How can Skinner\'s theory be applied in the classroom?',
        quote: 'Give a consequence, get a change in behavior.',
        bannerTop: 'Teachers can use reinforcement to encourage desirable behaviors.',
        imageClassroom: THEORIST_IMAGES.classroomTeacher,
        imageSkinner: THEORIST_IMAGES.skinner,
        positive: [
          'Praise',
          'Stickers or tokens',
          'Extra time',
          'Positive feedback',
        ],
        negative: [
          'Less homework',
          'Fewer restrictions',
          'Removal of a task or warning',
        ],
        footer: 'By applying reinforcement, teachers can create a positive learning environment and increase the likelihood of desirable behaviors.',
      },
    },
  },

  // SLIDE 18 (PDF Page 18): Significance of Skinner's Work
  {
    id: 'slide-18',
    slideNumber: 18,
    theoristId: 'skinner',
    sectionTitle: 'Significance',
    cardTitle: "SIGNIFICANCE OF SKINNER'S WORK",
    category: 'Skinner',
    content: {
      type: 'significance_skinner',
      data: {
        title: "SIGNIFICANCE OF SKINNER'S WORK",
        question: 'Why is Skinner\'s work important?',
        quote: 'Give a consequence, get a change in behavior.',
        imageSkinner: THEORIST_IMAGES.skinner,
        pillars: [
          { title: 'Guides Teaching Practices', desc: 'Provides useful principles for managing behavior and promoting positive learning in the classroom.' },
          { title: 'Helps Improve Student Behavior', desc: 'Shows how reinforcement can increase desirable behaviors and reduce undesirable ones.' },
          { title: 'Supports Better Learning', desc: 'Creates a more positive and structured learning environment, which can lead to greater student success.' },
          { title: 'Influences Modern Education', desc: 'His ideas continue to be used in behavior management, special education, and classroom strategies today.' },
        ],
        footer: 'Skinner\'s work remains significant because it helps educators understand how behavior can be shaped to build better learners and better classrooms.',
      },
    },
  },

  // SLIDE 19 (PDF Page 19): Conclusion (Skinner)
  {
    id: 'slide-19',
    slideNumber: 19,
    theoristId: 'skinner',
    sectionTitle: 'Conclusion',
    cardTitle: 'CONCLUSION',
    category: 'Skinner',
    content: {
      type: 'conclusion_skinner',
      data: {
        title: 'CONCLUSION',
        subtitle: 'Key Points to Remember',
        quote: 'Give a consequence, get a change in behavior.',
        imageSkinner: THEORIST_IMAGES.skinner,
        points: [
          'Skinner\'s theory shows that behavior is learned and can be changed through its consequences.',
          'Reinforcement increases desirable behaviors, while punishment can decrease undesirable behaviors.',
          'Skinner\'s ideas provide practical guidance for teachers in creating positive and supportive learning environments.',
          'His work continues to be relevant because it helps educators understand how to shape behavior and promote meaningful learning.',
        ],
        footer: 'In conclusion, Skinner\'s work reminds us that consistent and thoughtful use of consequences can lead to positive behavior change, better learners, and more effective classrooms.',
      },
    },
  },

  // SLIDE 20 (PDF Page 20): Classical Conditioning - Ivan Pavlov Hero
  {
    id: 'slide-20',
    slideNumber: 20,
    theoristId: 'pavlov',
    sectionTitle: 'Classical Conditioning',
    cardTitle: 'CLASSICAL CONDITIONING',
    category: 'Pavlov',
    content: {
      type: 'pavlov_hero_exact',
      data: {
        title: 'CLASSICAL CONDITIONING',
        author: 'IVAN PAVLOV',
        tagline: 'Learning Through Association:',
        subtitle: 'The Life, Work, and Legacy of Ivan Pavlov',
        imagePavlov: THEORIST_IMAGES.pavlov,
      },
    },
  },

  // SLIDE 21 (PDF Page 21): Biographical Timeline (Pavlov)
  {
    id: 'slide-21',
    slideNumber: 21,
    theoristId: 'pavlov',
    sectionTitle: 'Biographical Timeline',
    cardTitle: 'BIOGRAPHICAL TIMELINE',
    category: 'Pavlov',
    scrollHighlight: true,
    content: {
      type: 'pavlov_timeline_exact',
      data: {
        title: 'BIOGRAPHICAL TIMELINE',
        imagePavlov: THEORIST_IMAGES.pavlov,
        timeline: [
          { num: 1, title: '1849', desc: 'BORN IN RYAZAN, RUSSIA' },
          { num: 2, title: 'SCIENTIFIC EDUCATION', desc: 'STUDIED PHYSIOLOGY' },
          { num: 3, title: 'DIGESTIVE RESEARCH', desc: 'CONDUCTED EXPERIMENTS ON DIGESTION' },
          { num: 4, title: '1904', desc: 'RECEIVED NOBEL PRIZE' },
          { num: 5, title: 'CONDITIONED REFLEX RESEARCH', desc: 'DEVELOPED IDEAS ASSOCIATED WITH CLASSICAL CONDITIONING' },
          { num: 6, title: '1936', desc: 'DIED IN MOSCOW' },
        ],
      },
    },
  },

  // SLIDE 22 (PDF Page 22): Major Contributions and Accomplishment
  {
    id: 'slide-22',
    slideNumber: 22,
    theoristId: 'pavlov',
    sectionTitle: 'Major Accomplishments',
    cardTitle: 'MAJOR CONTRIBUTIONS AND ACCOMPLISHMENT',
    category: 'Pavlov',
    content: {
      type: 'pavlov_two_areas',
      data: {
        title: 'MAJOR CONTRIBUTIONS AND ACCOMPLISHMENT',
        subtitle: 'Pavlov\'s work can be understood through two major areas',
        area1Title: 'PHYSIOLOGY OF DIGESTION',
        imageDigestion: THEORIST_IMAGES.digestiveAnatomy,
        area2Title: 'CONDITIONED REFLEXES AND LEARNING',
        imageDog: THEORIST_IMAGES.pavlovDogExp,
      },
    },
  },

  // SLIDE 23 (PDF Page 23): Major Contribution - Physiology of Digestion
  {
    id: 'slide-23',
    slideNumber: 23,
    theoristId: 'pavlov',
    sectionTitle: 'Digestive Physiology',
    cardTitle: 'PHYSIOLOGY OF DIGESTION',
    category: 'Pavlov',
    content: {
      type: 'pavlov_digestion_focus',
      data: {
        header: 'MAJOR CONTRIBUTION',
        title: 'PHYSIOLOGY OF DIGESTION',
        leftText: 'PAVLOV CONDUCTED EXTENSIVE RESEARCH ON HOW THE DIGESTIVE SYSTEM FUNCTIONS AND HOW THE NERVOUS SYSTEM REGULATES DIGESTIVE PROCESSES.',
        rightText: 'HIS SCIENTIFIC WORK ON DIGESTION EARNED HIM THE 1904 NOBEL PRIZE IN PHYSIOLOGY OR MEDICINE.',
        imageDigestion: THEORIST_IMAGES.digestiveAnatomy,
        imagePavlov: THEORIST_IMAGES.pavlov,
      },
    },
  },

  // SLIDE 24 (PDF Page 24): Conditioned Reflexes and Learning (4-step Dog Experiment)
  {
    id: 'slide-24',
    slideNumber: 24,
    theoristId: 'pavlov',
    sectionTitle: 'Conditioned Reflexes',
    cardTitle: 'CONDITIONED REFLEXES AND LEARNING',
    category: 'Pavlov',
    scrollHighlight: true,
    content: {
      type: 'pavlov_dog_diagram',
      data: {
        header: 'MAJOR CONTRIBUTION',
        title: 'CONDITIONED REFLEXES AND LEARNING',
        imageDog: THEORIST_IMAGES.pavlovDogExp,
        stages: [
          {
            num: 1,
            title: '1. Before Conditioning',
            condition: '(No association yet)',
            stimulus: 'Food (unconditioned stimulus)',
            response: 'Salivation (unconditioned response)',
          },
          {
            num: 2,
            title: '2. Before Conditioning',
            condition: '(Neutral stimulus)',
            stimulus: 'Bell (neutral stimulus)',
            response: 'No salivation (no response)',
          },
          {
            num: 3,
            title: '3. During Conditioning',
            condition: '(Pairing)',
            stimulus: 'Bell + Food',
            response: 'Salivation (unconditioned response)',
          },
          {
            num: 4,
            title: '4. After Conditioning',
            condition: '(Conditioned reflex)',
            stimulus: 'Bell (conditioned stimulus)',
            response: 'Salivation (conditioned response)',
          },
        ],
      },
    },
  },

  // SLIDE 25 (PDF Page 25): Pavlov's Classical Conditioning Definition
  {
    id: 'slide-25',
    slideNumber: 25,
    theoristId: 'pavlov',
    sectionTitle: 'Core Concept',
    cardTitle: "PAVLOV'S CLASSICAL CONDITIONING",
    category: 'Pavlov',
    content: {
      type: 'pavlov_definition_slide',
      data: {
        title: "PAVLOV'S CLASSICAL CONDITIONING",
        definition: 'Classical Conditioning is a form of learning in which an organism develops an association between two stimuli, causing a previously neutral stimulus to produce a learned response eventually.',
        flow: ['ASSOCIATION', 'LEARNING', 'RESPONSE'],
        imageDog: THEORIST_IMAGES.pavlovDogExp,
      },
    },
  },

  // SLIDE 26 (PDF Page 26): Principles of Classical Conditioning
  {
    id: 'slide-26',
    slideNumber: 26,
    theoristId: 'pavlov',
    sectionTitle: 'Principles',
    cardTitle: 'PRINCIPLES OF CLASSICAL CONDITIONING',
    category: 'Pavlov',
    content: {
      type: 'pavlov_principles_exact',
      data: {
        title: 'PRINCIPLES OF CLASSICAL CONDITIONING',
        subtitle: 'MAJOR PRINCIPLES',
        image: THEORIST_IMAGES.pavlov,
        principles: [
          { num: 1, title: '1. ACQUISITION', desc: 'The process through which an association between stimuli is established.' },
          { num: 2, title: '2. EXTINCTION', desc: 'The conditioned response gradually weakens when the conditioned stimulus is repeatedly presented without the unconditioned stimulus.' },
          { num: 3, title: '3. RECOVERY', desc: 'A previously extinguished conditioned response may temporarily reappear after a period of rest.' },
          { num: 4, title: '4. GENERALIZATION', desc: 'A learned response may occur in response to stimuli that are similar to the conditioned stimulus.' },
          { num: 5, title: '5. DISCRIMINATION', desc: 'The learner learns to distinguish the conditioned stimulus from other similar stimuli.' },
        ],
      },
    },
  },

  // SLIDE 27 (PDF Page 27): Application in Education
  {
    id: 'slide-27',
    slideNumber: 27,
    theoristId: 'pavlov',
    sectionTitle: 'Education Application',
    cardTitle: 'APPLICATION IN EDUCATION',
    category: 'Pavlov',
    content: {
      type: 'pavlov_education_exact',
      data: {
        title: 'APPLICATION IN EDUCATION',
        header: 'CLASSROOM ROUTINE',
        description: 'A teacher consistently plays the same short music before a quiet reading activity.',
        flow: 'AFTER REPEATED EXPOSURE: MUSIC → READING TIME → PREPARATION',
        result: 'Eventually, the music may become a cue associated with quiet reading.',
        imageClassroom: THEORIST_IMAGES.classroomDesks,
      },
    },
  },

  // SLIDE 28 (PDF Page 28): Application in Everyday Life
  {
    id: 'slide-28',
    slideNumber: 28,
    theoristId: 'pavlov',
    sectionTitle: 'Everyday Life',
    cardTitle: 'APPLICATION IN EVERYDAY LIFE',
    category: 'Pavlov',
    content: {
      type: 'pavlov_everyday_exact',
      data: {
        title: 'APPLICATION IN EVERYDAY LIFE',
        subtitle: 'Classical conditioning is not limited to laboratories.',
        image: THEORIST_IMAGES.pavlovDogExp,
        points: [
          { title: 'Advertisements', desc: 'Advertisements often pair products with pleasant music, attractive images, or positive emotions.' },
          { title: 'Food Experiences', desc: 'People can develop strong positive or negative reactions to foods based on previous experiences.' },
          { title: 'Emotional Triggers', desc: 'Certain places, sounds, objects, or situations can trigger emotions because of previous associations.' },
        ],
      },
    },
  },

  // SLIDE 29 (PDF Page 29): Pavlov Quote
  {
    id: 'slide-29',
    slideNumber: 29,
    theoristId: 'pavlov',
    sectionTitle: 'Core Maxim',
    cardTitle: '“LEARNING THROUGH ASSOCIATION”',
    category: 'Pavlov',
    content: {
      type: 'pavlov_maxim_exact',
      data: {
        quote: '“LEARNING THROUGH ASSOCIATION”',
        author: 'Ivan Pavlov · 1849 – 1936',
        subtitle: 'Nobel Laureate in Physiology & Discoverer of Conditioned Reflexes',
        imagePavlov: THEORIST_IMAGES.pavlov,
      },
    },
  },

  // SLIDE 30 (PDF Page 30): Social Learning Theory - Albert Bandura Hero
  {
    id: 'slide-30',
    slideNumber: 30,
    theoristId: 'bandura',
    sectionTitle: 'Social Learning Theory',
    cardTitle: 'SOCIAL LEARNING THEORY',
    category: 'Bandura',
    content: {
      type: 'bandura_hero_exact',
      data: {
        title: 'SOCIAL LEARNING THEORY',
        author: 'Albert Bandura',
        subtitle: 'Understanding Learning Through Observation, Modelling, and Self-Efficacy',
        imageBandura: THEORIST_IMAGES.bandura,
      },
    },
  },

  // SLIDE 31 (PDF Page 31): About Albert Bandura
  {
    id: 'slide-31',
    slideNumber: 31,
    theoristId: 'bandura',
    sectionTitle: 'Biography',
    cardTitle: 'ABOUT ALBERT BANDURA',
    category: 'Bandura',
    content: {
      type: 'about_bandura_exact',
      data: {
        title: 'ABOUT ALBERT BANDURA',
        imageBandura: THEORIST_IMAGES.bandura,
        bullets: [
          'Albert Bandura (1925-2021) was a Canadian-American psychologist.',
          'He developed Social Learning Theory, emphasizing that people can learn by observing others.',
          'His work later developed into Social Cognitive Theory.',
        ],
      },
    },
  },

  // SLIDE 32 (PDF Page 32): About: Social Learning Theory
  {
    id: 'slide-32',
    slideNumber: 32,
    theoristId: 'bandura',
    sectionTitle: 'Core Concept',
    cardTitle: 'ABOUT: SOCIAL LEARNING THEORY',
    category: 'Bandura',
    content: {
      type: 'about_slt_exact',
      data: {
        title: 'ABOUT: SOCIAL LEARNING THEORY',
        subtitle: 'Learning Beyond Direct Experience',
        definition: 'Social Learning Theory explains that people learn behaviors, attitudes, and skills by observing and interacting with others, not only through direct experience.',
        image: THEORIST_IMAGES.boboDollStudy,
        imageBandura: THEORIST_IMAGES.bandura,
      },
    },
  },

  // SLIDE 33 (PDF Page 33): Social Learning Theory - 4 Steps
  {
    id: 'slide-33',
    slideNumber: 33,
    theoristId: 'bandura',
    sectionTitle: '4 Observational Steps',
    cardTitle: 'SOCIAL LEARNING THEORY',
    category: 'Bandura',
    scrollHighlight: true,
    content: {
      type: 'bandura_four_steps_exact',
      data: {
        title: 'SOCIAL LEARNING THEORY',
        subtitle: '4 Mediational Processes',
        image: THEORIST_IMAGES.boboDollStudy,
        steps: [
          { num: 1, name: 'ATTENTION', sub: 'STIMULI · FOCUS', desc: 'The learner must pay attention to the model and observe key features of behavior.' },
          { num: 2, name: 'RETENTION', sub: 'REHEARSE · ENCODE', desc: 'The observed behavior must be organized, encoded, and remembered in memory.' },
          { num: 3, name: 'MOTOR REPRODUCTION', sub: 'PRACTICE · FEEDBACK', desc: 'The observer executes and refines the physical performance of the behavior.' },
          { num: 4, name: 'MOTIVATION', sub: 'REWARD · REINFORCE', desc: 'Perceived rewards and vicarious consequences provide the incentive to act.' },
        ],
      },
    },
  },

  // SLIDE 34 (PDF Page 34): Bandura Model of Reciprocal Determinism
  {
    id: 'slide-34',
    slideNumber: 34,
    theoristId: 'bandura',
    sectionTitle: 'Reciprocal Determinism',
    cardTitle: 'BANDURA MODEL OF RECIPROCAL DETERMINISM',
    category: 'Bandura',
    scrollHighlight: true,
    content: {
      type: 'bandura_reciprocal_exact',
      data: {
        title: 'BANDURA MODEL OF RECIPROCAL DETERMINISM',
        imageBandura: THEORIST_IMAGES.bandura,
        nodes: [
          {
            code: '01',
            title: 'Person',
            items: [
              'Temperament/Personality',
              'Preferences',
              'Intelligence (of All Types)',
              'Thoughts',
            ],
          },
          {
            code: '02',
            title: 'Environment',
            items: [
              'Context/Social Networks',
              'Culture',
              'Other People',
            ],
          },
          {
            code: '03',
            title: 'Behavior',
            items: [
              'Actions',
              'Facial Expressions',
              'Verbalizations',
            ],
          },
        ],
      },
    },
  },

  // SLIDE 35 (PDF Page 35): Significance & Applications
  {
    id: 'slide-35',
    slideNumber: 35,
    theoristId: 'bandura',
    sectionTitle: 'Applications',
    cardTitle: 'SIGNIFICANCE & APPLICATIONS',
    category: 'Bandura',
    content: {
      type: 'bandura_applications_exact',
      data: {
        title: 'SIGNIFICANCE & APPLICATIONS',
        imageBandura: THEORIST_IMAGES.bandura,
        imageTeacher: THEORIST_IMAGES.classroomTeacher,
        points: [
          { domain: 'IN EDUCATION', desc: 'Teachers serve as models for students.' },
          { domain: 'IN FAMILY', desc: 'Children can develop behaviors by observing their parents and other family members.' },
          { domain: 'IN SOCIETY', desc: 'People may learn behaviors, attitudes, and social practices by observing peers, communities, and media.' },
          { domain: 'IN PERSONAL DEVELOPMENT', desc: 'Self-efficacy can influence a person\'s motivation, effort, persistence, and willingness to face challenges.' },
        ],
      },
    },
  },

  // SLIDE 36 (PDF Page 36): Bandura Quote
  {
    id: 'slide-36',
    slideNumber: 36,
    theoristId: 'bandura',
    sectionTitle: 'Core Maxim',
    cardTitle: '“WE LEARN BY OBSERVING OTHERS”',
    category: 'Bandura',
    content: {
      type: 'bandura_maxim_exact',
      data: {
        quote: '“WE LEARN BY OBSERVING OTHERS”',
        author: 'Albert Bandura · 1925 – 2021',
        subtitle: 'Pioneer of Social Learning Theory and Self-Efficacy',
        imageBandura: THEORIST_IMAGES.bandura,
      },
    },
  },

  // SLIDE 37 (PDF Page 37 / Synthesis): Comparative Synthesis of the 4 Theorists
  {
    id: 'slide-37',
    slideNumber: 37,
    theoristId: 'synthesis',
    sectionTitle: 'Grand Synthesis',
    cardTitle: 'COMPARATIVE THEORETICAL MATRIX',
    category: 'Synthesis',
    content: {
      type: 'grand_synthesis',
      data: {
        title: 'COMPARATIVE THEORETICAL MATRIX',
        subtitle: 'Synthesizing Thorndike, Skinner, Pavlov, and Bandura',
        theorists: [
          {
            name: 'Edward Thorndike',
            theory: 'Connectionism',
            process: 'Trial & Error, S-R Bond',
            apparatus: 'Puzzle Box (Cats)',
            mechanism: 'Law of Effect, Law of Exercise, Law of Readiness',
            image: THEORIST_IMAGES.thorndike,
          },
          {
            name: 'B.F. Skinner',
            theory: 'Operant Conditioning',
            process: 'ABC Model (Antecedent, Behavior, Consequence)',
            apparatus: 'Skinner Box (Rats/Pigeons)',
            mechanism: 'Positive/Negative Reinforcement & Punishment',
            image: THEORIST_IMAGES.skinner,
          },
          {
            name: 'Ivan Pavlov',
            theory: 'Classical Conditioning',
            process: 'Stimulus Substitution & Association',
            apparatus: 'Salivary Conditioning Cannula',
            mechanism: 'Acquisition, Extinction, Spontaneous Recovery',
            image: THEORIST_IMAGES.pavlov,
          },
          {
            name: 'Albert Bandura',
            theory: 'Social Learning Theory',
            process: 'Observational Modeling & Mediational Steps',
            apparatus: 'Bobo Doll Study',
            mechanism: 'Attention, Retention, Reproduction, Motivation',
            image: THEORIST_IMAGES.bandura,
          },
        ],
      },
    },
  },
];
