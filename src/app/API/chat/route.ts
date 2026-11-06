import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message, category } = await request.json();

    // Simulate AI processing latency
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock response based on category
    let reply = "";
    switch (category) {
      case "coding":
        reply = `Here is the optimized code for your request:\n\n\`\`\`typescript\nconst optimized = () => {\n  // Logic processed by Shadow Forge\n  return true;\n};\n\`\`\`\n\nExecution complete.`;
        break;
      case "security":
        reply = "Security Audit Complete. Found 0 critical vulnerabilities in the current configuration. System integrity: 100%.";
        break;
      case "general":
      default:
        reply = `I have processed your command: "${message}". Awaiting further instructions, Operator Butter.`;
    }

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Shadow Forge Error" },
      { status: 500 }
    );
  }
}