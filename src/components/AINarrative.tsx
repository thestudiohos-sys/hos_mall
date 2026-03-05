"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Loader2 } from 'lucide-react';
import { aiGeneratedStylingTips, AIGeneratedStylingTipsOutput } from '@/ai/flows/ai-generated-styling-tips';

export function AINarrative() {
  const [description, setDescription] = useState('');
  const [result, setResult] = useState<AIGeneratedStylingTipsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!description.trim()) return;
    setIsLoading(true);
    try {
      const output = await aiGeneratedStylingTips({ clothingItemDescription: description });
      setResult(output);
    } catch (error) {
      console.error("AI Generation failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-stylist" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Sparkles className="h-12 w-12 text-accent" />
          </div>
          <h2 className="font-headline text-4xl md:text-5xl mb-6 uppercase tracking-tight">Antigravity AI Stylist</h2>
          <p className="font-body text-lg opacity-80 max-w-2xl mx-auto">
            원하는 의상이나 무드를 설명해 주세요. Antigravity AI가 당신만을 위한 감각적인 내러티브와 전문적인 스타일링 팁을 제안합니다.
          </p>
        </div>

        <div className="space-y-8 bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10">
          <div className="space-y-4">
            <Textarea
              placeholder="예: 도시의 야경이 내려다보이는 루프탑 바에서 어울릴만한 가벼운 실크 셔츠..."
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[120px] focus-visible:ring-accent"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button 
              onClick={handleGenerate} 
              disabled={isLoading || !description.trim()}
              className="w-full bg-accent hover:bg-accent/90 py-8 text-lg font-bold"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  당신의 패션 스토리를 구성 중입니다...
                </>
              ) : (
                '내러티브 생성하기'
              )}
            </Button>
          </div>

          {result && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-headline text-2xl mb-4 italic">"{result.evocativeDescription}"</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.stylingTips.map((tip, idx) => (
                  <Card key={idx} className="bg-white/10 border-none">
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-accent">{idx + 1}</span>
                      </div>
                      <p className="text-sm leading-relaxed">{tip}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
