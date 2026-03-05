
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Loader2, Quote } from 'lucide-react';
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
    <section id="ai-stylist" className="py-32 bg-primary text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Sparkles className="h-10 w-10 text-accent" />
            </div>
          </div>
          <h2 className="font-headline text-4xl md:text-6xl mb-6 uppercase tracking-tight">H.O.S_Mall AI Stylist</h2>
          <p className="font-body text-lg md:text-xl opacity-70 max-w-2xl mx-auto leading-relaxed italic">
            "당신의 스타일을 한 문장으로 정의하기엔 너무나 특별합니다. <br />
            원하는 의상이나 무드를 설명해 주세요. H.O.S_Mall AI가 독창적인 내러티브를 선사합니다."
          </p>
        </div>

        <div className="space-y-10 bg-white/5 p-10 md:p-12 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl">
          <div className="space-y-6">
            <Textarea
              placeholder="예: 안개 낀 새벽, 파리의 카페테라스에서 커피 한 잔을 즐길 때 어울릴만한 코트..."
              className="bg-white/10 border-white/20 text-white placeholder:text-white/30 min-h-[150px] text-lg focus-visible:ring-accent transition-all rounded-xl p-6"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button 
              onClick={handleGenerate} 
              disabled={isLoading || !description.trim()}
              className="w-full bg-accent hover:bg-accent/90 py-10 text-xl font-black uppercase tracking-[0.2em] shadow-lg shadow-accent/20 transition-all active:scale-[0.98] rounded-xl"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                  당신을 위한 스타일 시나리오 구성 중...
                </>
              ) : (
                '내러티브 생성하기'
              )}
            </Button>
          </div>

          {result && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="relative pt-12">
                <Quote className="absolute top-0 left-0 h-10 w-10 text-accent/30" />
                <h3 className="font-headline text-2xl md:text-3xl mb-4 italic leading-snug pl-6">
                  {result.evocativeDescription}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {result.stylingTips.map((tip, idx) => (
                  <Card key={idx} className="bg-white/10 border-white/5 hover:bg-white/15 transition-colors duration-300">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center shrink-0 shadow-lg shadow-accent/20">
                        <span className="text-xs font-black text-white">{idx + 1}</span>
                      </div>
                      <p className="text-sm md:text-base leading-relaxed font-medium opacity-90">{tip}</p>
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
