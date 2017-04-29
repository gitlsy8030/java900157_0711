package LSY.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.TYPE, ElementType.METHOD,ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
public @interface NamingAnnotation {
	public String FunName() default "";
	public String FunId() default "";
	public boolean IsAjax() default false;
	public String DBCol() default "";
	public String FieldDesc() default "";
}
 