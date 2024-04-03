import fastify from 'fastify';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod'
import { createEvent } from './routes/create-event';
import { registerForEvent } from './routes/register-for-event';
import { getEvent } from './routes/get-event';
import { getAttendeeBadge } from './routes/get-attendee-badge';


const port = Number(process.env.PORT) || 3333;

const app = fastify();
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);

app.listen({ port }).then(() => {
    console.log(`HTTP server runnning on http://localhost:${port}`);
});