Our prompt is structured and opposed to free-form prompts, our prompt depends
heavily on the current state of the simulation. 

We devide the prompt into the following sections:

1. System Prompt
2. Current State
3. Observations
4. Conversations
5. Memory
6. Plan

We define a standard interface called `Context`that you can use to extend the prompt
with additional blocks.