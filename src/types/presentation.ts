export type TheoristId = 'intro' | 'thorndike' | 'skinner' | 'pavlov' | 'bandura' | 'synthesis';

export interface SlideCard {
  id: string;
  slideNumber: number;
  theoristId: TheoristId;
  sectionTitle: string;
  cardTitle: string;
  subtitle?: string;
  category: string;
  scrollHighlight?: boolean;
  content: {
    type: string;
    data: any;
  };
}
