/* Full AI Pipeline Orchestrator */

class AIFullPipeline {

constructor(){
this.cleaner = new window.MultiAICleaner?.() || null;
this.dedup = new window.AIDedupEngine?.() || null;
this.corrector = new window.AIAutoCorrectionEngine?.() || null;
this.quality = new window.AIDataQualityEngine?.() || null;
this.learning = new window.AILearningEngine?.() || null;
this.enrichment = new window.AIEnrichmentEngine?.() || null;
}

async process(contacts){

let data = contacts;

// Step 1 Clean
if(this.cleaner){
data = await Promise.all(data.map(c=>this.cleaner.cleanContact(c)));
}

// Step 2 Auto Correct
if(this.corrector){
data = data.map(c=>this.corrector.correct(c));
}

// Step 3 Enrich
if(this.enrichment){
data = data.map(c=>this.enrichment.enrich(c));
}

// Step 4 Learn
if(this.learning){
data = data.map(c=>this.learning.applyLearning(c));
}

// Step 5 Deduplicate
let duplicates = [];
if(this.dedup){
duplicates = this.dedup.findDuplicates(data);
}

// Step 6 Quality
let quality = null;
if(this.quality){
quality = this.quality.scoreDatabase(data);
}

return {
contacts:data,
duplicates,
quality
};

}

}

window.AIFullPipeline = AIFullPipeline;
