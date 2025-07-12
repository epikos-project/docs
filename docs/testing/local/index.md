Think of local testing like unit testing for your simulation. It focuses on 
evaluating individual agents or small groups of agents in isolation, without 
considering the entire simulation context.

For instance, you might want to test the coherence of an agent's actions by
placing the agent next to two resources. Resource A has 10 energy, and 
Resource B has 5 energy. You can then validate that the agent chooses
Resource A over Resource B, ensuring that the agent's decision-making logic is
fitting your expectations.